import "./style.css"
import { Navigate, Route, Routes } from "react-router";
import ShopLayout from "./components/ShopLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import OrdersPage from "./pages/OrdersPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";


function Home() {

    return (

        <Routes>

            <Route path="/" element={<Navigate to="/products" replace />} />
        
            <Route path="/login" element={<LoginPage />} />
    
            <Route element={<ShopLayout />}>

                <Route path="products" element={<ProductsPage />} />
                <Route path="products/:id" element={<ProductDetailsPage />} />
        
                <Route element={<ProtectedRoute />}>
                
                    <Route path="dashboard" element={<DashboardLayout />}>
                    
                        <Route index element={<DashboardHome />} />
                        <Route path="orders" element={<OrdersPage />} />
                        <Route path="settings" element={<SettingsPage />} />
                    </Route>
                </Route>
        
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );

}

export default Home