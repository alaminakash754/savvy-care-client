import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAppointment = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    refetch,
    data: appointment = [],
    isPending: isAppointmentLoading,
  } = useQuery({
    queryKey: ["appointment", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/appointments?email=${user.email}`);
      return res.data;
    },
  });
  return [appointment, refetch, isAppointmentLoading];
};

export default useAppointment;
