import { createBrowserRouter } from "react-router";

import Home from "../pages/home/Home";
import SignUp from "../Authentication/components/signup";
import Login from "../Authentication/components/Login";
import ForgotPassword from "../Authentication/components/ForgotPassword";
import AboutUs from "../pages/about/AboutUs";
import ContactUs from "../pages/Contact/ContactUs";
import StudentDashboard from "../Features/students/StudentDashboard";


const children = [
    {element:<Home/>, path:"/"},
    {element:<SignUp/>, path:"signup"},
    {element:<Login/>, path:"login"},
    {element:<ForgotPassword/>, path:"forgot-password"},
    {element:<AboutUs/>, path:"about-us"},
    {element:<ContactUs/>, path:"contact-us"},
    {element:<StudentDashboard/>, path:"students"},

];


export const router = createBrowserRouter([
    {
      errorElement: (
        <a href="/" className="text-center">
          This page does not exist
        </a>
      ),
      children,
    },
  ]);