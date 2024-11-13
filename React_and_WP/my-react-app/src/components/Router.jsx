import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App.jsx";
import SinglePost from "./SinglePost.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/posts/:id",
        element: <SinglePost />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />
};

export default Router;
