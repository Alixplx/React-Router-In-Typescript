import { useLocation, useNavigate } from "react-router";


type NavigationState = {

    username?: string;
}


function DashboardPage() {

    const navigate = useNavigate()
    const location = useLocation()

    const state = location.state as NavigationState | null
    const username = state?.username

    return (

        <div className="page">

            <div className="content-card">
                
                <h1>Dashboard</h1>
                <p>Welcome, <strong>{username ?? "Guest"}</strong>!</p>
                <p>You are now on the dashboard page.</p>
                <button onClick={() => navigate("/products")}>View Products</button>
                <button className="secondary-button" onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    );
}

export default DashboardPage;