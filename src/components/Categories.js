import { Link, Outlet } from 'react-router-dom';


import React from 'react'

const Categories = () => { 
    return (
        <>
         <nav className="nav nav-pills nav-fill">
                <Link className="nav-link active" aria-current="page" to="/">Population Less than 5000000</Link>
                <Link className="nav-link" to="From 50000000 to 500000000">From 50000000 to 500000000</Link>
                <Link className="nav-link" to="500000000 and above">500000000 and above</Link>  
                /* <Link className="nav-link disabled">Disabled</Link> */
            </nav>

            <Outlet/> 
        
        </>
    )
}


export default Categories;