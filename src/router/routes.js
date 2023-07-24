import { createBrowserRouter } from "react-router-dom";
import Profile from "../pages/profile";
import Register from "../pages/register";
import Post from "../pages/post";
import Home from "../pages/home";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/post",
        element: <Home />,
    },
    {
        path: "/post/:id",
        element: <Post />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/register",
        element: <Register />,
    },
  ]);
  export default Routes;