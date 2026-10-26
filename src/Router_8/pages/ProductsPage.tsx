import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { getProducts } from "../api/productsApi";
import type { Product } from "../types/product";


function ProductsPage() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function loadProducts() {

        try {

            setLoading(true);
            setError("");

            const data = await getProducts();
            setProducts(data);

        } catch (error: unknown) {

            if (axios.isAxiosError(error)) {

                setError(error.code === "ECONNABORTED" ? "The request timed out. Please try again." : "Unable to load products. Check your connection.")

            } else {

                setError("An unexpected error occurred.");
            }

        } finally {

            setLoading(false);
        }
    }

    useEffect(() => {  

        loadProducts()

    }, []);

    if (loading) {

        return <main className="container"><p>Loading products...</p></main>;
    }

    if (error) {

        return (

            <main className="container">
                <p className="error">{error}</p>
                <button onClick={() => loadProducts()}>Try Again</button>
            </main>
        );
    }

    return (

        <main className="container">

            <h1>Our Products</h1>
            <p>Choose a product to see more information.</p>

            <div className="products-grid">

                {products.map((product) => (

                    <article className="product-card" key={product.id}>

                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p className="price">${product.price.toFixed(2)}</p>
                        <p>Rating: {product.rating.rate} / 5</p>
                        <Link to={`/products/${product.id}`}>View Details</Link>
                    </article>
                ))}
            </div>
        </main>
    );
}

export default ProductsPage;