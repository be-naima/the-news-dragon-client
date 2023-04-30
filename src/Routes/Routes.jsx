import { createBrowserRouter, Navigate } from "react-router-dom";
import News from "../assets/News";
import Catagories from "../Layout/Catagories";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import NewsLayout from "../Layout/NewsLayout";
import Home from "../Pages/Home";
import Register from "../Register";
import Login from '../Login'
import PrivateRouter from "../PrivateRouter";
import Term from "../Term";
const router = createBrowserRouter([
    {
          path:"/",
          element:<LoginLayout></LoginLayout>,
          children:[
            {
                path:'/',
                element: <Navigate to="/catagory/0"></Navigate>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:"register",
                element: <Register></Register>
            },
            {
                path:"term",
                element: <Term></Term>
            }
          ]
    },

    {
        path:'catagory',
        element: <Main></Main>,
        children:[
            
            {
                path:":id",
                element:<Catagories></Catagories>,
                loader: ({params}) =>fetch(`http://localhost:5000/catagories/${params.id}`)

            }
        ]
    },
    {
        
            
                path:"news",
                element: <NewsLayout></NewsLayout>,
                children:[
                    {
                        path:':id',
                        element:<PrivateRouter><News></News></PrivateRouter>,
                        loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
                    }
                ]
    
            
        
    }
])
export default router;