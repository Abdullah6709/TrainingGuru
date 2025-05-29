import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRouter from './routes/PublicRoutes';
import Home from '../page/public/Home';
import Getscholarship from '../page/public/Getscholarship';
import Certificate from '../page/public/Certificate';
import Career from '../page/public/Career';
import Register from '../page/public/Register';
import Contact from '../page/public/Contact'
import About from "../page/public/About";
import AllCourses from "../page/public/AllCourses";
import SingUp from "../page/public/SingUp";
import LogIn from "../page/public/LogIn";
import CourseDetail from "../page/public/CourseDetail"


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
            path:"/career",
            element:<Career />
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
            path:"/coursedetail/:id",
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