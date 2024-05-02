import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://savvy-care-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
