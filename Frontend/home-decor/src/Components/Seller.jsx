import React from "react";
import individualChair from "../Assets/individual chair.jpg"

function Seller(){
    return (
        <>
            <div>
                <h1 className="Seller-title">Hello Seller</h1>
            </div>
            <p className="Seller-title">Add product:</p>
            <div className="Add-product-container">
                <label for="Productname">Product name:</label>
                <input type="text" id="Productname" className="Add-product-input"/><br/><br/>
                <label for="Productprice">Product price:</label>
                <input type="text" id="Productprice" className="Add-product-input"/><br/><br/>
                <label for="Productdesc">Product description:</label>
                <textarea id="Productdesc" className="Add-product-input"></textarea>
                <p>Images tag needs to be here</p>
                <button className="Add-product-button">Add product</button>
            </div>
            <p className="Seller-title">Existing products:</p>
            <div className="Existing-product-container">
                <div className="Single-related-products-container">
                    <img className="Single-related-products-image" src={individualChair} alt="alternate" />
                    <p>Chairs</p>
                    <p>$44.00</p>
                    <p>Review stars</p>
                    <button>Update</button>
                </div>
                <div className="Single-related-products-container">
                    <img className="Single-related-products-image" src={individualChair} alt="alternate" />
                    <p>Chairs</p>
                    <p>$44.00</p>
                    <p>Review stars</p>
                    <button>Update</button>
                </div>
            </div>
        </>
    )
}

export default Seller