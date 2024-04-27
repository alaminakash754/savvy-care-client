import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import "../payments/Invoice.css";
const Invoice = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div className="invoice-img bg-fixed text-white pt-8 mb-5 rounded-xl">
      {payments.map((payment, index) => (
        <div className="text-black bg-blue-200  opacity-90 pt-20" key={index}>
          <h1 className="text-center text-3xl font-bold">
            Welcome to <span className="text-blue-600"> Smile Savvy Care</span>
          </h1>
          <div className="ml-10  space-y-3">
            <h2 className="border-b-2  w-1/2 border-blue-400 border-dotted ">
              Patients Name: {user.displayName}
            </h2>
            <h2 className="border-b-2  w-1/2 border-blue-400 border-dotted">
              Diseases Details:{payment?.patientProblem}{" "}
            </h2>
            <h3 className="border-b-2  w-1/2 border-blue-400 border-dotted">
              Refer Doctors: {payment?.doctorName}{" "}
            </h3>
            <h3 className="border-b-2  w-1/2 border-blue-400 border-dotted">
              Appointment Ids: {payment?.appointmentIds}
            </h3>
            <h4 className="border-b-2  w-1/2 border-blue-400 border-dotted">
              Appointment Date: {payment?.date}
            </h4>
            <h4 className="border-b-2  w-1/2 border-blue-400 border-dotted">
              Total Cost: $ {payment?.price}
            </h4>
            <h5 className="border-b-2  w-1/2 border-blue-400 border-dotted">
              Payment Status: <span>Paid</span>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Invoice;
