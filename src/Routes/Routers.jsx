import {createBrowserRouter,} from "react-router-dom";
import MainLayouts from "../Mainlayouts/MainLayouts";
import NotFound from "../Components/NotFound";
import Home from "../pages/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";
import ProductDetails from "../Components/ProductDetails";



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
          path:'register',
          element:<Register></Register>
        },
        {
          path:'login', 
          element:<Login></Login>
        },
       {
        path:'/productDetails/:id',
       element:<ProductDetails></ProductDetails>,
       loader:() => fetch('/Products.Json')
       }
      ]
    },
  ]);

  export default Router