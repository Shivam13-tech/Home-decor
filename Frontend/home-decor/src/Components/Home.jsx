import React from "react"
import Category from "../Assets/individual chair.jpg"

function Home(){
    return(
    <>
        <div>
            <h1>Will add slider here</h1>
        </div>
        <div className="category-container">
            <div className="category-image-container">
                <img className="category-image" src={Category} alt="Category" />
                <h2 className="category-title">Hall</h2>
            </div>
            <div className="category-image-container">
                <img className="category-image" src={Category} alt="Category" />
                <h2 className="category-title">Entrance</h2>
            </div>
            <div className="category-image-container">
                <img className="category-image" src={Category} alt="Category" />
                <h2 className="category-title">Balcony</h2>
            </div>
            <div className="category-image-container">
                <img className="category-image" src={Category} alt="Category" />
                <h2 className="category-title">Kitchen</h2>
            </div>
            <div className="category-image-container">
                <img className="category-image" src={Category} alt="Category" />
                <h2 className="category-title">Bathroom</h2>
            </div>
            <div className="category-image-container">
                <img className="category-image" src={Category} alt="Category" />
                <h2 className="category-title">Bedroom</h2>
            </div>
        </div>
    </>
    )
}

export default Home