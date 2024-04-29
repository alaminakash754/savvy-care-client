import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {
  FaHeartCircleCheck,
  FaMoneyBill1Wave,
  FaUserDoctor,
} from "react-icons/fa6";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-2">
      <div
        className="bg-blue-100 h-[150px] rounded-xl  pt-8"
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <div className=" gap-5 text-4xl font-semibold flex justify-center items-center">
          <FaMoneyBill1Wave className="bg-green-200 text-green-600 p-1 rounded-lg"></FaMoneyBill1Wave>
          <h2 className="text-5xl">{stats.revenue}</h2>
        </div>
        <progress
          className="progress progress-success "
          value="80"
          max="100"
        ></progress>
        <h2 className="text-center text-2xl">Revenue</h2>
      </div>

      <div
        className="bg-blue-100 h-[150px] rounded-xl  pt-8"
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <div className="gap-5 text-4xl font-semibold flex justify-center items-center">
          <FaUserDoctor className="bg-red-200 text-red-600 p-1 rounded-lg"></FaUserDoctor>

          <h2 className="text-5xl">{stats.users}</h2>
        </div>
        <progress
          className="progress progress-error w-52"
          value="40"
          max="100"
        ></progress>
        <h2 className="text-center text-2xl">Doctors</h2>
      </div>
      <div
        className="bg-blue-100 h-[150px] rounded-xl pt-8"
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <div className=" gap-5 text-4xl font-semibold flex justify-center items-center">
          <FaUser className="bg-blue-200 text-blue-600 p-1 rounded-lg"></FaUser>
          <h2 className="text-5xl">{stats.doctors}</h2>
        </div>
        <progress
          className="progress progress-accent "
          value="60"
          max="100"
        ></progress>
        <h2 className="text-center text-2xl">Patients</h2>
      </div>
      <div
        className="bg-blue-100 h-[150px] rounded-xl pt-8"
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <div className="gap-5 text-4xl font-semibold flex justify-center items-center">
          <FaHeartCircleCheck className="bg-yellow-200 text-yellow-600 p-1 rounded-lg"></FaHeartCircleCheck>
          <h2 className="text-5xl">{stats?.appointments}</h2>
        </div>
        <progress
          className="progress progress-warning  w-52 "
          value="30"
          max="100"
        ></progress>
        <h2 className="text-center text-2xl">Appointments</h2>
      </div>
    </div>
  );
};

export default AdminHome;
