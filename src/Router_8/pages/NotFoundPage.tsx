import { Link } from "react-router"


function NotFoundPage() {

    return (

        <main className="container not-found">

            <h1>404 — Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <Link to="/products">Return to Products</Link>
        </main>
    )
}

export default NotFoundPage