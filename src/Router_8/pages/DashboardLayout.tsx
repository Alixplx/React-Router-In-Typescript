import { NavLink, Outlet, useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";


function DashboardLayout() {

    const { logout } = useAuth()
    const navigate = useNavigate()

    function handleLogout() {

        logout()
        navigate("/login", { replace: true })
    }

    return (

        <div className="dashboard-layout">

            <aside className="sidebar">
                <h2>Admin Panel</h2>

                <nav>

                    <NavLink to="/dashboard" end>Overview</NavLink>
                    <NavLink to="/dashboard/orders">Orders</NavLink>
                    <NavLink to="/dashboard/settings">Settings</NavLink>
                </nav>

                <button onClick={handleLogout}>Logout</button>
            </aside>

            <section className="dashboard-main">

                <header className="dashboard-header">
                
                    <h1>Dashboard</h1>
                </header>

                <div className="dashboard-content">
                
                    <Outlet />
                </div>
            </section>
        </div>
    )
}

export default DashboardLayout