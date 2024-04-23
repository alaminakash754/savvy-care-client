import useAppointment from "../../../Hooks/useAppointment";
import useAuth from "../../../Hooks/useAuth";


const UserHome = () => {
    const [appointment] = useAppointment();
    const totalFees = appointment.reduce( (total, treatment) => total + treatment.treatmentCost, 0)
    const {user} = useAuth();
    return (
        <div>
            <div className="flex justify-evenly bg-blue-50 h-16 rounded-xl">
                <h2 className="text-3xl ">Hi, <span className="text-blue-500 font-semibold">{user.displayName}</span></h2>
                <h1 className="text-3xl ">Total Appointment: <span className="text-blue-500 font-semibold">{appointment.length}</span></h1>
            </div>
            <div className="overflow-x-auto mt-10 bg-blue-50 rounded-lg">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Treatment Name</th>
                            <th>Patient Problem</th>
                            <th>Referred Doctor</th>
                            <th>Appointment Date</th>
                            <th>Treatment Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map((appointment, idx) => <tr key={appointment._id}>
                                <th>
                                    {idx + 1}
                                </th>
                                <td className="text-lg font-semibold">
                                    {appointment.treatment_name}
                                </td>
                                <td className=" font-bold">
                                   {appointment.patientProblem}
                                </td>
                                <td className="text-lg font-semibold">${appointment.doctorName}</td>
                                <td className="font-semibold">
                                    {appointment.date}
                                </td>
                                <td className="font-semibold">
                                    {appointment.treatmentCost}
                                </td>
                            </tr>)
                        }
                        {/* row 1 */}
                        
                        
                       
                    </tbody>
                    

                </table>
            </div>
            <div className="mt-5">
                <h2 className="text-xl font-medium">My Total Treatment Fees: <span className="font-bold text-3xl text-blue-800"> {totalFees}</span></h2>
            </div>


        </div>
    );
};

export default UserHome;