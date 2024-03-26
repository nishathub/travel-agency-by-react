import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/Register',
                element: <Register></Register>,
            },
        ]
    }
])

export default Routes;