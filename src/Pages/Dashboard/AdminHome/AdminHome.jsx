import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaHeartCircleCheck, FaUserDoctor } from "react-icons/fa6";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });

  const { data: doctors = [] } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await axiosPublic.get("/doctors", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });

  const { data: appointments = [] } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/appointments", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });
  //   console.log(appointments);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-2">
      <div className="bg-blue-100 h-[180px] rounded-xl ml-10 pt-8">
        <div className=" gap-5 text-4xl font-semibold flex justify-center items-center">
          <FaUser className="bg-green-200 text-green-600 p-1 rounded-lg"></FaUser>
          <h2 className="text-5xl">{users.length}</h2>
        </div>
        <progress
          className="progress progress-success  w-56 ml-2"
          value={users.length}
          max="20"
        ></progress>
        <h2 className="text-center text-2xl">Patients</h2>
      </div>
      <div className="bg-blue-100 h-[180px] rounded-xl ml-10 pt-8">
        <div className="gap-5 text-4xl font-semibold flex justify-center items-center">
          <FaUserDoctor className="bg-red-200 text-red-600 p-1 rounded-lg"></FaUserDoctor>

          <h2 className="text-5xl">{doctors.length}</h2>
        </div>
        <progress
          className="progress progress-error w-56 ml-2"
          value={doctors.length}
          max="20"
        ></progress>
        <h2 className="text-center text-2xl">Doctors</h2>
      </div>
      <div className="bg-blue-100 h-[180px] rounded-xl ml-10 pt-8">
        <div className="gap-5 text-4xl font-semibold flex justify-center items-center">
          <FaHeartCircleCheck className="bg-yellow-200 text-yellow-600 p-1 rounded-lg"></FaHeartCircleCheck>
          <h2 className="text-5xl">{appointments.length}</h2>
        </div>
        <progress
          className="progress progress-warning  w-56 ml-2"
          value="70"
          max="100"
        ></progress>
        <h2 className="text-center text-2xl">Appointments</h2>
      </div>
    </div>
  );
};

export default AdminHome;
