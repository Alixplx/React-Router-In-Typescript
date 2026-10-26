import { Link, Outlet } from "react-router";


function ShopLayout() {

    return (

        <>
            <header className="navbar">

                <Link className="brand" to="/products">Product Store</Link>

                <nav>
                    <Link to="/products">Products</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
            </header>

            <Outlet />

            <footer className="footer">React Router Practice Project</footer>
        </>
    )
}

export default ShopLayout