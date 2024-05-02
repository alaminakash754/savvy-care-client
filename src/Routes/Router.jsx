import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Landing/Home/Home";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/signUp/SignUp";
import DoctorsProfile from "../Pages/doctorsProfile/DoctorsProfile";
import AddDoctor from "../Pages/doctorsProfile/AddDoctor";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/userHome/UserHome";
import Appointment from "../Pages/Appointment/Appointment";
import Payment from "../Pages/Dashboard/userHome/payments/Payment";
import PaymentHistory from "../Pages/Dashboard/userHome/paymentHistory/PaymentHistory";
import Invoice from "../Pages/Dashboard/userHome/paymentHistory/Invoice";
import AddPrescription from "../Pages/Dashboard/userHome/addPrescription/AddPrescription";
import DoctorSuggestion from "../Pages/DoctorSuggestion/DoctorSuggestion";
import FeedBack from "../Pages/Dashboard/userHome/feedBack/FeedBack";
import SendEmail from "../Pages/DoctorSuggestion/SendEmail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/doctorsProfile",
        element: <DoctorsProfile></DoctorsProfile>,
        loader: () => fetch("https://savvy-care-server.vercel.app/doctors"),
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
        loader: () => fetch("https://savvy-care-server.vercel.app/treatments"),
      },
      {
        path: "/patientAndDoctor",
        element: (
          <PrivateRoute>
            <DoctorSuggestion></DoctorSuggestion>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://savvy-care-server.vercel.app/prescriptions"),
      },
      {
        path: "/sendEmail",
        element: <SendEmail></SendEmail>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "feedBack",
        element: <FeedBack></FeedBack>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "addPrescription",
        element: <AddPrescription></AddPrescription>,
      },
      {
        path: "invoice/:id",
        element: <Invoice></Invoice>,
      },
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addDoctor",
        element: (
          <PrivateRoute>
            <AddDoctor></AddDoctor>
          </PrivateRoute>
        ),
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>,
        loader: () => fetch("https://savvy-care-server.vercel.app/treatments"),
      },
    ],
  },
]);
