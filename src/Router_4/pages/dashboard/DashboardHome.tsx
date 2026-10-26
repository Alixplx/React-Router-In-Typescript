

function DashboardHome() {

    return (

        <section className="content-card">

            <h2>Dashboard Overview</h2>
            <p>Welcome to your admin dashboard.</p>
    
            <div className="stats">

                <div className="stat-card">
                    <h3>Total Users</h3>
                    <p>1,250</p>
                </div>
        
                <div className="stat-card">
                    <h3>Total Products</h3>
                    <p>320</p>
                </div>
            </div>
        </section>
    )
}
  
export default DashboardHome;