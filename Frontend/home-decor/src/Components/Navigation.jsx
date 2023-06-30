import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
    return(
        <>
                <ul className="navigation-subcontainer">
                    <li><Link to='/'><button className="navigation-button">Home</button></Link></li>
                    <li><Link to='/Seller'><button className="navigation-button">Seller's</button></Link></li>
                    <li><Link to='/About'><button className="navigation-button">About us</button></Link></li>
                    <li className="login-signup"><Link to='/Auth'><button className="navigation-button">Login / Signup</button></Link></li>
                </ul>
        </>
    )
}

export default Navigation