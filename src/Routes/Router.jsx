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
          path:'/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path:'/doctorsProfile',
        element:<DoctorsProfile></DoctorsProfile>,
        loader: () => fetch('https://savvy-care-server.vercel.app/doctors')
        },
        {
          path:'/addDoctor',
          element:<PrivateRoute><AddDoctor></AddDoctor></PrivateRoute>
        },
        
      ]
    },
  ]);