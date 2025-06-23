import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRouter from './routes/PublicRoutes';
import Home from '../page/public/Home/Home';
import Getscholarship from '../page/public/Scholarship/Getscholarship';
import Certificate from '../page/public/Certificate/Certificate';
import Register from '../page/public/Register/Register';
import Contact from '../page/public/Contact/Contact'
import About from "../page/public/About/About";
import AllCourses from "../page/public/Courses/AllCourses";
import SingUp from "../page/public/SingUp";
import LogIn from "../page/public/LogIn";
import CourseDetail from "../page/public/Courses/CourseDetail"


const routers = createBrowserRouter([
    {
        path:"/",
        element:<PublicRouter />,
        children:[
        {
          path: "/",
          index: true,
          element: <Home />
        },
        {
            path:"/getscholarship",
            element: <Getscholarship/>
        },
        {
            path:"/certificate",
            element: <Certificate />
        },
        {
            path:"/about",
            element: <About />
        },
        {
            path:"/register",
            element:<Register />
        },
     
        {
            path:"/contact",
            element:<Contact />
        },
         
        {
            path:"/allcourses",
            element:<AllCourses />
        },
         {
            path:"/allcourses/coursedetail/:slug",
            element: <CourseDetail />,
          },
        {
            path:"/signup",
            element:<SingUp/>
        },
        {
            path:"/login",
            element:<LogIn/>
        }

        ],
    },

]);

export default function MainRouter() {
    return <RouterProvider router={routers} />;
}