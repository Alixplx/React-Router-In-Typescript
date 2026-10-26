import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";


function DashboardPage() {

    const { logout } = useAuth()
    const navigate = useNavigate()

    function handleLogout() {

        logout()
        navigate("/login", { replace: true })
    }

    return (

        <div className="page">

            <div className="card">

                <h1>Dashboard</h1>
                <p>You are logged in and can access this page.</p>
                <Link to="/products">View Products</Link>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default DashboardPage;