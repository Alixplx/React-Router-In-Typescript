import { Routes, Route, Link } from "react-router";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import "./style.css"


function Home() {

    return (

        <>

            <Routes>

                <Route path="/products" element={<ProductsPage />} />
                <Route
                    path="/products/:productId"
                    element={<ProductDetails />}
                />
            </Routes>

            <Link to={"/products"}>Products</Link>

        </>
    )
}

export default Home