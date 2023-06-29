import React from "react";

function Navigation(){
    return(
        <>
                <ul className="navigation-subcontainer">
                    <li><button className="navigation-button">Home</button></li>
                    <li><button className="navigation-button">Seller's</button></li>
                    <li><button className="navigation-button">About us</button></li>
                    <li class="login-signup"><button className="navigation-button">Login / Signup</button></li>
                </ul>
        </>
    )
}

export default Navigation