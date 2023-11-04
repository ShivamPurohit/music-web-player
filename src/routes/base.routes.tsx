import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";

const baseRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
        children: []
    }
]

export default baseRoutes;