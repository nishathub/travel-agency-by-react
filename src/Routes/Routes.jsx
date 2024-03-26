import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import Home from "../Components/Home/Home";

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
        ]
    }
])

export default Routes;