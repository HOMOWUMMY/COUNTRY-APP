import { Link, Outlet, useNavigation } from "react-router-dom";

function Navbar() {
  
    return (
        <>

            <nav className="nav nav-pills nav-fill">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to="search">Search</Link>
                <Link className="nav-link" to="currency">Currency</Link>  
                <Link className="nav-link" to="population">Population</Link>
                <Link className="nav-link" to="region">Region</Link>
                {/* <Link className="nav-link disabled">Disabled</Link> */}
            </nav>

            <Outlet/>

        </>
    )
}

export default Navbar;