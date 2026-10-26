import "./style.css"
import { Routes, Route, NavLink } from "react-router";
import DashboardLayout from "./components/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import UsersPage from "./pages/dashboard/UsersPage";
import ProductsPage from "./pages/dashboard/ProductsPage";
import SettingsPage from "./pages/dashboard/SettingsPage";


function Home() {

    return (

        <>

            <Routes>

                <Route path="/dashboard" element={<DashboardLayout />}>

                    <Route index element={<DashboardHome />} />
                    <Route path="users" element={<UsersPage />} />
                    <Route path="products" element={<ProductsPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                </Route>
            </Routes>

            <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </>
    );
}

export default Home