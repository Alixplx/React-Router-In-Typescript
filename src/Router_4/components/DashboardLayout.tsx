import { NavLink, Outlet } from "react-router";


function DashboardLayout() {

    return (

        <div className="dashboard">

            <aside className="sidebar">
                <h2 className="sidebar-title">Admin Panel</h2>

                <nav className="sidebar-nav">
                    
                    <NavLink to="/dashboard" end>
                        Overview
                    </NavLink>

                    <NavLink to="/dashboard/users">
                        Users
                    </NavLink>

                    <NavLink to="/dashboard/products">
                        Products
                    </NavLink>

                    <NavLink to="/dashboard/settings">
                        Settings
                    </NavLink>
                </nav>
            </aside>

            <div className="dashboard-main">

                <header className="dashboard-header">
                    <h1>My Dashboard</h1>
                </header>

                <main className="dashboard-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;