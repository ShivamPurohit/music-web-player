import { RouteObject } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Search from "../pages/Search";

const baseRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
            path: '',
            element: <Home/>,
            children: [],
            },
            {
                path: 'search',
                element: <Search/>,
                children: [],
            }
        ]
    }
]

export default baseRoutes;