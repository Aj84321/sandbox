import {Navigate, useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
import Home from "./pages/Home";

export default function Router(){

    return useRoutes([
        
        {
            path: "/",
            element: <LogoOnlyLayout/>,
            children:[
                {
                    path: '', element: <Navigate to="/login"/>,
                },
                {
                    path: 'login', element: <Login />,
                },
                {
                    path: 'register', element: <Register />,
                },
                {
                    path: 'home', element: <Home/>,
                },
                {
                    path: '404', element: <NotFound />,
                }
            ]
        },
        
        
        
        
        {
            path: '*', element: <Navigate to="/404" replace/>
        }
    ])




}