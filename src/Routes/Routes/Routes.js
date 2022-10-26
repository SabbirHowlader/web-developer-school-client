import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../../Page/Blog/Blog";
import Course from "../../Page/Course/Course";
import Faq from "../../Page/Faq/Faq";
import Home from "../../Page/Home/Home";
import Login from "../../Page/Login/Login/Login";
import Register from "../../Page/Login/Register/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/home',
                element: <Home></Home>
            },

            {
                path:'/course',
                element: <Course></Course>
            },

            {
                path:'/course/:id',
                element: <Course></Course>
            },

            {
                path:'/faq',
                element: <Faq></Faq>
            },

            {
               path: '/blog',
               element: <Blog></Blog> 
            },

            {
                path: '/login',
                element: <Login></Login>
            },
             
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    }

])