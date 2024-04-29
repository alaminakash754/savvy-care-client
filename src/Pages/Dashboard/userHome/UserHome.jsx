import { Link } from "react-router-dom";
import useAppointment from "../../../Hooks/useAppointment";
import useAuth from "../../../Hooks/useAuth";
import { GiClick } from "react-icons/gi";

const UserHome = () => {
  const [appointment] = useAppointment();
  const totalFees = appointment.reduce(
    (total, treatment) => total + treatment.treatmentCost,
    0
  );
  const { user } = useAuth();
  return (
    <div>
      <div className="flex justify-evenly bg-blue-50 h-16 rounded-xl">
        <h2 className="text-3xl ">
          Hi,{" "}
          <span className="text-blue-500 font-semibold">
            {user.displayName}
          </span>
        </h2>
        <h1 className="text-3xl ">
          Total Appointment:{" "}
          <span className="text-blue-500 font-semibold">
            {appointment.length}
          </span>
        </h1>
      </div>
      <div className="mt-5 text-center">
        <Link to="/dashboard/addPrescription">
          <button className="bg-purple-100 text-lg text-blue-700 font-medium btn btn-outline border-0 border-t-4 border-b-4 mb-5">
            Need a Online Prescription <GiClick></GiClick>
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto mt-5 bg-blue-50 rounded-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Treatment Name</th>
              <th>Patient Problem</th>
              <th>Referred Doctor</th>
              <th>Appointment Date</th>
              <th>Treatment Cost</th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((appointment, idx) => (
              <tr key={appointment._id}>
                <th>{idx + 1}</th>
                <td className="text-lg font-semibold">
                  {appointment.treatmentName}
                </td>
                <td className=" font-bold">{appointment.patientProblem}</td>
                <td className="text-lg font-semibold">
                  {appointment.doctorName}
                </td>
                <td className="font-semibold">{appointment.date}</td>
                <td className="font-semibold">{appointment.treatmentCost}</td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
      <div className="mt-5 flex justify-between border-4 border-blue-400 p-2 rounded-lg">
        <h2 className="text-xl font-medium">
          My Total Treatment Fees:{" "}
          <span className="font-bold text-3xl text-blue-800"> {totalFees}</span>
        </h2>
        {totalFees > 0 ? (
          <h2 className="font-semibold">
            Payment Status:{" "}
            <span className="text-xl font-bold text-blue-600">Due</span>
          </h2>
        ) : (
          <h2 className="font-semibold">
            Payment Status:{" "}
            <span className="text-xl font-bold text-blue-600">Paid</span>
          </h2>
        )}
        <Link to="/dashboard/payment">
          <button className="btn bg-gradient-to-r from-blue-400 to-blue-900 text-white font-semibold text-lg">
            Go for Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserHome;
