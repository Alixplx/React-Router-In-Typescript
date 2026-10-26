import { Navigate, Route, Routes } from "react-router";
import "./style.css"
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";


function Home() {

    return (

        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<h1 className="not-found">404 - Page Not Found</h1>} />
        </Routes>
    );

}

export default Home