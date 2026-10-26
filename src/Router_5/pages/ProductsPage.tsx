import { useNavigate } from "react-router"


function ProductsPage() {

    const navigate = useNavigate()

    return (

        <div className="page">

            <div className="content-card">

                <h1>Products</h1>
                <ul className="product-list">

                    <li>Laptop</li>
                    <li>Keyboard</li>
                    <li>Mouse</li>
                </ul>
                <button onClick={() => navigate("/dashboard")}>Return to Dashboard</button>
                <button className="secondary-button" onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    )
}

export default ProductsPage;