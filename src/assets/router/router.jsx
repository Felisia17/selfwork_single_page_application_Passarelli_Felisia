import { createBrowserRouter } from "react-router-dom";
import Homepage from "../../views/Homepage.jsx";
import Layout from "../../components/Layout.jsx";
import { getAllPostsLoader, getSinglePostLoader } from "./loader.jsx";
import Info from "../../views/Info.jsx";
import Details from "../../views/Details.jsx";
import Login from "../../views/Login.jsx";
import Register from "../../views/Register.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path:'/',
                element: <Homepage />
            },
            {
                path: 'info',
                element: <Info />,
                loader: getAllPostsLoader
            },
            {
                path: 'info/details/:id',
                element: <Details />,
                loader: getSinglePostLoader
            },
            {
                path: '/login',
                element: <Login/>,
            },
              {
                path: '/register',
                element: <Register/>,
            }
        ]
    }
]);

export default router;