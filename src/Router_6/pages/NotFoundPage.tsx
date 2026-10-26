import { Link } from "react-router"

function NotFoundPage() {

    return (

        <div className="page">

            <div className="card">

                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The page you're looking for doesn't exist.</p>
                <Link to="/dashboard">Go to Dashboard</Link>
            </div>
        </div>
    )
}

export default NotFoundPage