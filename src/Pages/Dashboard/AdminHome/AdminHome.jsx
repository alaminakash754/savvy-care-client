
import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const AdminHome = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [],  } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
            return res.data;
        }
    })
    return (
       <div className="grid grid-cols-3 gap-5">
         <div className="bg-blue-100 h-[200px] rounded-xl flex justify-center items-center">
            <div className="flex gap-5">
                <FaUser></FaUser>
                <h2>{users.length}</h2>
            </div>
        </div>
         <div className="bg-blue-100 ">
            <div className="flex gap-5">
                <FaUser></FaUser>
                <h2>{users.length}</h2>
            </div>
        </div>
         <div className="bg-blue-100 ">
            <div className="flex gap-5">
                <FaUser></FaUser>
                <h2>{users.length}</h2>
            </div>
        </div>
       </div>
    );
};

export default AdminHome;