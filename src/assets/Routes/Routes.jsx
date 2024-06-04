import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Manu from "../Pages/Home/Manu/Manu";
import Order from "../Pages/Home/Order/Order";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import Prograss from "../../Components/prograss/Prograss";
import PrivatePoute from "../Pages/Home/PrivateRoute/PrivatePoute";
import Dashbord from "../../Components/Dashbord/Dashbord";
import Cart from "../../Components/DeshboardCard/Cart/Cart";
import AllUser from "../../Components/DeshboardCard/AllUser/AllUser";
import AddItem from "../../Components/DeshboardCard/AddItem/AddItem";
import AdminRouts from "../../Hooks/AdminRouts";

// import Logins from "../Pages/Home/Login/Logins";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/manu',
          element:<Manu></Manu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/prgrass',
          element:<PrivatePoute><Prograss></Prograss></PrivatePoute>
        }
        
      ]
    },
    {
      path:"/dashboard",
      element:<Dashbord></Dashbord>,
      children:[
        // normal user routs
        {
          path:'cart',
          element:<Cart></Cart>,
        },

        // admin user route
        {
          path:'addItem',
          element:<AdminRouts><AddItem></AddItem></AdminRouts>
        },
        {
          path:'allUser',
          element:<AdminRouts><AllUser></AllUser></AdminRouts>
        }
      ]
    
    }
  ]);