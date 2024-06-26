import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaUserDoctor } from "react-icons/fa6";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
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
  console.log(users);

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  // console.log(users);
  const handleMakeDoctor = (user) => {
    axiosSecure.patch(`/users/doctor/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is a Doctor Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle
        subHeading="Smile Savvy Care"
        heading="All Users"
      ></SectionTitle>
      <div className="my-4">
        <h2>Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Users Photo</th>

              <th>Role</th>
              <th>Make Doctor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th>{user.name}</th>
                <td>{user.email}</td>
                <td>
                  <img className="w-20 h-20 rounded-full" src={user.photoURL} />
                </td>

                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost btn-sm text-2xl text-white bg-blue-600"
                    >
                      <FaUsers></FaUsers>{" "}
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "doctor" ? (
                    "Doctor"
                  ) : (
                    <button
                      onClick={() => handleMakeDoctor(user)}
                      className="btn btn-ghost btn-sm text-2xl text-white bg-blue-600"
                    >
                      <FaUserDoctor></FaUserDoctor>{" "}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
