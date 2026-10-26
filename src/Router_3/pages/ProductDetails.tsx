import { Link, useParams } from "react-router";
import { products } from "../data/products";


function ProductDetails() {

    const { productId} = useParams<{productId: string}>()

    const id = Number(productId)

    const product = products.find((item) => item.id === id)

    if (!Number.isInteger(id) || id <= 0 || !product) {

        return (

            <section className="page">
                <h1>Product Not Found</h1>
                <Link to="/products">Back to Products</Link>
            </section>
        )
    }

    return (

        <section className="page">
            <h1>{product.name}</h1>
            <p>Product ID: {product.id}</p>
            <p>Price: ${product.price}</p>

            <Link to="/products">Back to Products</Link>
        </section>
    )
}

export default ProductDetails