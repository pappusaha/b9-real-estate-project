import {createBrowserRouter,} from "react-router-dom";
import MainLayouts from "../Mainlayouts/MainLayouts";
import NotFound from "../Components/NotFound";
import Home from "../pages/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";
import ProductDetails from "../Components/ProductDetails";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import Projects from "../pages/Projects";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement:<NotFound></NotFound>,
      children:[
        {
          path:'/', 
          element:<Home></Home>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login', 
          element:<Login></Login>
        },
       {
        path:'/productDetails/:id',
       element:<PrivateRoute>
        <ProductDetails></ProductDetails>
        </PrivateRoute>,
       loader:() => fetch('/Products.Json')
       },
       {
        path:'/contact',
        element:<Contacts></Contacts>
       },
       {
        path:'/about',

        element:<About></About>
       },
       {
        path:'/projects',
        element:<PrivateRoute><Projects></Projects></PrivateRoute>
       }
      ]
    },
  ]);

  export default Router