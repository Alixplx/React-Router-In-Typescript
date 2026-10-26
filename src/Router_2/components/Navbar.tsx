import { NavLink } from "react-router"


function Navbar() {

    return (

        <nav className="navbar">

            <h2 className="logo">MyWebsite</h2>

            <div className="nav-links">

                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    )
}

export default Navbar