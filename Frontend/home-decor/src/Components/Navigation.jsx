import React from "react";
import cart from "../Assets/cart.png"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Navigation(){
    const cartItems = useSelector((state) => state.cart.cart);
    return(
        <>
                <ul className="navigation-subcontainer">
                    <li><Link to='/'><button className="navigation-button">Home</button></Link></li>
                    <li><Link to='/Seller'><button className="navigation-button">Seller's</button></Link></li>
                    <li><Link to='/About'><button className="navigation-button">About us</button></Link></li>
                    <li className="login-signup"><Link to='/Auth'><button className="navigation-button">Login / Signup</button></Link></li>
                    <div>
                    <span className="cart-no">{cartItems.length}</span>
                    <li><Link to='/Cart'><img className="cart-icon" src={cart} alt="cart-icon"/></Link></li>
                    </div>
                </ul>
        </>
    )
}

export default Navigation