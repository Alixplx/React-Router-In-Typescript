import { Link } from "react-router";


function DashboardHome() {

    return (

        <div>
            <h2>Welcome to your dashboard!</h2>
            <p>This is your private area.</p>

            <div className="stats-grid">

                <article className="stat-card">

                    <h3>Orders</h3>
                    <p>24</p>
                </article>

                <article className="stat-card">

                    <h3>Products</h3>
                    <p>20</p>
                </article>
            </div>

            <Link to="/products">Explore the store</Link>
        </div>
    )
}

export default DashboardHome