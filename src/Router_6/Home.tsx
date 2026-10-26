import "./style.css"
import { createBrowserRouter, Navigate, Outlet} from "react-router";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage";
import RouteErrorPage from "./pages/RouteErrorPage";


function RootLayout() {

    return <Outlet />
}

export const router = createBrowserRouter([

    {

        path: "/",
        element: <RootLayout />,
        errorElement: <RouteErrorPage />,
        children: [

            {
                index: true,
                element: <Navigate to="/dashboard" replace />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "dashboard",
                        element: <DashboardPage />,
                    },
                    {
                        path: "products",
                        element: <ProductsPage />,
                    },
                ],
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);

export default RootLayout