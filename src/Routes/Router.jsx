import {
  createBrowserRouter,
} from "react-router-dom";
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



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/doctorsProfile',
        element: <DoctorsProfile></DoctorsProfile>,
        loader: () => fetch('http://localhost:5000/doctors')
      },
      {
        path:'/appointment',
        element:<Appointment></Appointment>,
        loader: () => fetch('http://localhost:5000/treatments')
      }

    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path:'adminHome',
        element:<AdminHome></AdminHome>
      },
      {
        path: 'users',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'addDoctor',
        element: <PrivateRoute><AddDoctor></AddDoctor></PrivateRoute>

      },
      {
        path:'appointment',
        element:<Appointment></Appointment>,
        loader: () => fetch('http://localhost:5000/treatments')
      }

    ]
  }
]);