import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAppointment from "../../../../Hooks/useAppointment";
import useAuth from "../../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionID] = useState("");
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [appointment, refetch] = useAppointment();
  console.log(appointment);
  const { user } = useAuth();
  const totalFees = appointment.reduce(
    (total, treatment) => total + treatment.treatmentCost,
    0
  );
  useEffect(() => {
    if (totalFees > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalFees })
        .then((res) => {
          // console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalFees]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction Id", paymentIntent.id);
        setTransactionID(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user.email,
          price: totalFees,
          transactionId: paymentIntent.id,
          date: new Date(), // convert to utc date, using moment js
          appointmentIds: appointment.map((item) => item._id),
          treatmentIds: appointment.map((item) => item.treatmentId),
          status: "pending",
          doctorName: appointment.map((item) => item.doctorName),
          patientProblem: appointment.map((item) => item.patientProblem),
          treatmentName: appointment.map((item) => item.treatmentName),
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log(res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for Payment",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/paymentHistory");
        }
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-primary my-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600 text-2xl">{error}</p>
        {transactionId && (
          <p className="text-green-700">
            {" "}
            your transaction id: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
