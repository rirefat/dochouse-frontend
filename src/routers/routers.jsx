import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/Home/Home";
import DoctorProfile from "../pages/DoctorProfile/DoctorProfile";
import Error404 from "../pages/Error404/Error404";
import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "home",
                element: <Home></Home>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "doctor-profile",
                element: <DoctorProfile></DoctorProfile>
            },
            {
                path: "appointment",
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: "login",
        element: <SignIn></SignIn>
    },
    {
        path: "registration",
        element: <SignUp></SignUp>
    },
    {
        path: "*",
        element: <Error404></Error404>
    }
])