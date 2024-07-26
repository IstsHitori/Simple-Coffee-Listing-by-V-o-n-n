import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import AllProducts from "./views/AllProducts";
import AvailableProducts from "./views/AvailableProducts";
import {loader as LoadProducts} from "./views/AllProducts"
import { loader as LoadAviableProducts } from "./views/AvailableProducts";
export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<AllProducts />,
                loader:LoadProducts
            },
            {
                path:"/products/available",
                element:<AvailableProducts />,
                loader: LoadAviableProducts
            }
        ]
    }
]);