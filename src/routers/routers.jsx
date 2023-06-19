import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/Home/Home";
import DoctorProfile from "../pages/DoctorProfile/DoctorProfile";
import Error404 from "../pages/Error404/Error404";

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
                path: "doctor-profile",
                element: <DoctorProfile></DoctorProfile>
            }
        ]
    },
    {
        path: "*",
        element: <Error404></Error404>
    }
])