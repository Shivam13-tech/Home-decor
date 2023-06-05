import React from "react"
import individualChair from "../Assets/individual chair.jpg"

function Individual(){
    return(
        <>
            <div className="Single-product">
                <div className="Single-product-image-container">
                    <img className="Single-product-image" src={individualChair} alt="product" />
                </div>
                <div className="Single-detail">
                    <h2>Simple Wood Chair Collection</h2>
                    <p>Review stars</p>
                    <div className="Single-product-price-container">
                        <div>
                            <p>As low as</p>
                            <p>$45.00</p>
                        </div>
                        <div>
                            <p>In Stock</p>
                        </div>
                    </div>
                    <hr></hr>
                    <p>Quantity: Number + / -</p>
                    <button className="Single-product-button">Add to Cart</button>
                    <div className="Single-product-options">
                        <p>ADD TO WISHLIST</p>
                        <p>ADD TO COMPARE</p>
                        <p>EMAIL</p>
                    </div>
                </div>
            </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <h3 style={{marginTop:"4vh"}}>Details :</h3>
                    <div className="details-image-container">
                        <img className="details-image" src={individualChair} alt="details" />
                    </div>
                    <p>lorem30xcv cxvkcxjnvjxcnvjnxcvnxclkvnxlcnvlkxcnvlkxcnvlkxcnlvnxcklvnxclvnklxvn</p>   
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <h3 style={{marginTop:"4vh"}}>Reviews :</h3>
                    <h4>Review dkjfnkjvndfjnvdfknvlkdfnvlkdfnvlkdflvndflvnldfkvnldfv</h4>
                    <p>Review user name</p>
                    <h4>Review dkjfnkjvndfjnvdfknvlkdfnvlkdfnvlkdflvndflvnldfkvnldfv</h4>
                    <p>Review user name</p>
                    <h4>Review dkjfnkjvndfjnvdfknvlkdfnvlkdfnvlkdflvndflvnldfkvnldfv</h4>
                    <p>Review user name</p>
                </div>
            <div className="Single-product-review-container">
                <h3 style={{marginTop:"4vh"}}>Add review :</h3>
                <textarea style={{width: "15vw", height: "15vh", marginTop:"1vh"}}>Review</textarea>
                <button className="Single-product-button">Submit Review</button>
            </div>
            <h2 style={{textAlign: "center", marginTop:"3vh"}}>Related Products</h2>
            <div className="Related-product-container">
                <div className="Single-related-products-container">
                    <img className="Single-related-products-image" src={individualChair} alt="alternate" />
                    <p>Chairs</p>
                    <p>$44.00</p>
                    <p>Review stars</p>
                </div>
                <div className="Single-related-products-container">
                    <img className="Single-related-products-image" src={individualChair} alt="alternate" />
                    <p>Chairs</p>
                    <p>$44.00</p>
                    <p>Review stars</p>
                </div>
                <div className="Single-related-products-container">
                    <img className="Single-related-products-image" src={individualChair} alt="alternate" />
                    <p>Chairs</p>
                    <p>$44.00</p>
                    <p>Review stars</p>
                </div>
                <div className="Single-related-products-container">
                    <img className="Single-related-products-image" src={individualChair} alt="alternate" />
                    <p>Chairs</p>
                    <p>$44.00</p>
                    <p>Review stars</p>
                </div>
            </div>
        </>
    )
}

export default Individual