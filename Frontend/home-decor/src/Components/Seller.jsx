import React from "react";
import individualChair from "../Assets/individual chair.jpg"

function Seller(){
    return (
        <> 
        <div className="Seller">
            <div>
                <div>
                    <h2 className="Seller-title">Hello Seller</h2>
                </div>
                <h4 className="Seller-title">Add product:</h4>
                <div className="product-box">
                    <div className="add-product-container">
                        <label for="Productname" className="add-product-label">Product name:</label>
                        <input type="text" className="add-product-input"/>
                        <label for="Productprice" className="add-product-label">Product price:</label>
                        <input type="text" className="add-product-input"/>
                        <label for="Productdesc" className="add-product-label">Product description:</label>
                        <textarea id="Productdesc" className="add-product-input"></textarea>
                        <label for="files" className="add-product-label">Select images to upload:</label>
                        <input type="file" id="files" name="files" multiple style={{marginTop: "1vh"}}/>
                        <button className="add-product-button">Add product</button>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="Seller-title">Existing products:</h3>
                <div className="Existing-product-container">
                    <div className="seller-product-container">
                        <img style={{width: "100%", height: "100%"}} src={individualChair} alt="alternate" />
                        <h3 className="seller-product-detail">Chairs</h3>
                        <h4 className="seller-product-detail">$44.00</h4>
                        <h4 className="seller-product-detail">Product description</h4>
                        <div style={{display: "flex"}}>
                            <button className="edit-product-button">Update</button>
                            <button className="edit-product-button">Delete</button>
                        </div>
                    </div>
                    <div className="seller-product-container">
                        <img style={{width: "100%", height: "100%"}} src={individualChair} alt="alternate" />
                        <h3 className="seller-product-detail">Chairs</h3>
                        <h4 className="seller-product-detail">$44.00</h4>
                        <h4 className="seller-product-detail">Product description</h4>
                        <div style={{display: "flex"}}>
                            <button className="edit-product-button">Update</button>
                            <button className="edit-product-button">Delete</button>
                        </div>
                    </div>
                    <div className="seller-product-container">
                        <img style={{width: "100%", height: "100%"}} src={individualChair} alt="alternate" />
                        <h3 className="seller-product-detail">Chairs</h3>
                        <h4 className="seller-product-detail">$44.00</h4>
                        <h4 className="seller-product-detail">Product description</h4>
                        <div style={{display: "flex"}}>
                            <button className="edit-product-button">Update</button>
                            <button className="edit-product-button">Delete</button>
                        </div>
                    </div>
                    <div className="seller-product-container">
                        <img style={{width: "100%", height: "100%"}} src={individualChair} alt="alternate" />
                        <h3 className="seller-product-detail">Chairs</h3>
                        <h4 className="seller-product-detail">$44.00</h4>
                        <h4 className="seller-product-detail">Product description</h4>
                        <div style={{display: "flex"}}>
                            <button className="edit-product-button">Update</button>
                            <button className="edit-product-button">Delete</button>
                        </div>
                    </div>
                    <div className="seller-product-container">
                        <img style={{width: "100%", height: "100%"}} src={individualChair} alt="alternate" />
                        <h3 className="seller-product-detail">Chairs</h3>
                        <h4 className="seller-product-detail">$44.00</h4>
                        <h4 className="seller-product-detail">Product description</h4>
                        <div style={{display: "flex"}}>
                            <button className="edit-product-button">Update</button>
                            <button className="edit-product-button">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}

export default Seller