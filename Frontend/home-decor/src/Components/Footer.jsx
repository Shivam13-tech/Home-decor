import React from 'react';
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className='footer-main'>
            <div>
                <p className='footer-data'>At DreamSpace, we understand the importance of creating a personalized and inviting home environment. Whether you're looking to spruce up your living room, bedroom, kitchen, bathroom, or balcony, we have something for everyone. Our collection includes furniture, lighting fixtures, wall art, rugs, and much more.</p>
            </div>
            <div>
                <ul>
                    <li className='footer-link'><Link to='/'><button className="navigation-button">Home</button></Link></li>
                    <li className='footer-link'><Link to='/Seller'><button className="navigation-button">Seller's</button></Link></li>
                    <li className='footer-link'><Link to='/About'><button className="navigation-button">About us</button></Link></li>
                </ul>
            </div>
            <div>
                <h3 className='footer-title'>Contact</h3>
                <p className='footer-contact'>DreamSpace@random.com</p>
                <p className='footer-contact'>+1 123 457 890</p>
            </div>
        </div>
    )
}

export default Footer