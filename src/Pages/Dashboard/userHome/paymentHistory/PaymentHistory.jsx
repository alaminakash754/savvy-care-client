import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  // console.log(payments);
  return (
    <div>
      <h2>Total payments : {payments.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Treatment Name</th>
              <th>Doctor Name</th>
              <th>Treatment Cost</th>
              <th>Transaction Id</th>
              <th>View Invoice</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment?.doctorName}</td>
                <td>{payment?.treatmentName}</td>
                <td>{payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>
                  <Link to={`/dashboard/invoice/${payment._id}`}>
                    <FaEye></FaEye>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
