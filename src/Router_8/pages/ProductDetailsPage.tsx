import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";
import { getProductById } from "../api/productsApi";
import type { Product } from "../types/product";


function ProductDetailsPage() {

    const { id } = useParams<{ id: string }>();

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        let cancelled = false;

        async function loadProduct() {

            if (!id || !/^[1-9]\d*$/.test(id)) {

                setError("Invalid product ID.");
                setLoading(false);
                return;
            }

            try {

                setLoading(true);
                setError("");
                setProduct(null);

                const data = await getProductById(Number(id));

                if (!cancelled) {
                
                    setProduct(data);
                }

            } catch (error: unknown) {

                if (cancelled) return;

                if (axios.isAxiosError(error) && error.response?.status === 404) {
                
                    setError("This product does not exist.")

                } else {
                
                    setError("Unable to load product details.");
                }

            } finally {

                if (!cancelled) {
                
                    setLoading(false);
                }
            }
        }

        loadProduct();

        return () => {
        
            cancelled = true;
        }

    }, [id])

    if (loading) {

        return <main className="container"><p>Loading product...</p></main>;
    }

    if (error) {

        return (

            <main className="container">
                <h1>Product Error</h1>
                <p className="error">{error}</p>
                <Link to="/products">Back to Products</Link>
            </main>
        )
    }

    if (!product) return null;

    return (

        <main className="container">

            <Link to="/products">← Back to Products</Link>

            <article className="product-details">

                <img src={product.image} alt={product.title} />

                <div>

                    <h1>{product.title}</h1>
                    <p className="price">${product.price.toFixed(2)}</p>
                    <p>{product.description}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Rating:</strong> {product.rating.rate} / 5{" "}({product.rating.count} reviews)</p>
                </div>
            </article>
        </main>
    )
}

export default ProductDetailsPage