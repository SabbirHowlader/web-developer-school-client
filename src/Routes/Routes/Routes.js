import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../../Page/Blog/Blog";
import Course from "../../Page/Course/Course";
import Faq from "../../Page/Faq/Faq";
import Login from "../../Page/Login/Login/Login";
import Register from "../../Page/Login/Register/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path:'/course',
                element: <Course></Course>,
                loader: () => fetch('https://web-developer-school-sever.vercel.app/courses')
            },

            {
                path:'/course/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`https://web-developer-school-sever.vercel.app/category/${params.id}`)
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