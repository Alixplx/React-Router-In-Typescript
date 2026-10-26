import { Link } from "react-router"


function ProductsPage() {

    return (

        <div className="page">

            <div className="card">

                <h1>Products</h1>
                <ul>
                    <li>Laptop</li>
                    <li>Keyboard</li>
                    <li>Mouse</li>
                </ul>

                <Link to="/dashboard">Back to Dashboard</Link>
            </div>
        </div>
    )
}

export default ProductsPage