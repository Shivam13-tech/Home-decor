import React from "react"
import Homewallpaper from "../Assets/home-wallpaper.jpg"
import Category from "../Assets/individual chair.jpg"

function Home(){
    return(
    <>
        <div className="home-wallpaper-container">
            <div className="text-overlay">
                <h1>DreamSpace</h1>
                <p>We offer a wide range of stylish and high-quality products to enhance the beauty and ambiance of your living spaces.</p>
            </div>
            <img className="home-wallpaper" src={Homewallpaper} alt="Home-wallpaper" />
        </div>
        <div className="home-main-container">
            <div className="home-category-container">
                <h1 className="home-select-title">Select category:</h1>
                <button className="home-categories">Hall</button>
                <button className="home-categories">Entrance</button>
                <button className="home-categories">Balcony</button>
                <button className="home-categories">Kitchen</button>
                <button className="home-categories">Bathroom</button>
            </div>
            <div className="category-container">
                <div className="category-image-container">
                    <img className="category-image" src={Category} alt="Category" />
                </div>
                <div className="category-image-container">
                    <img className="category-image" src={Category} alt="Category" />
                </div>
                <div className="category-image-container">
                    <img className="category-image" src={Category} alt="Category" />
                </div>
                <div className="category-image-container">
                    <img className="category-image" src={Category} alt="Category" />
                </div>
                <div className="category-image-container">
                    <img className="category-image" src={Category} alt="Category" />
                </div>
                <div className="category-image-container">
                    <img className="category-image" src={Category} alt="Category" />
                </div>
                <div className="category-image-container">
                    <img className="category-image" src={Category} alt="Category" />
                </div>
                <div className="category-image-container">
                    <img className="category-image" src={Category} alt="Category" />
                </div>
                <div className="category-image-container">
                    <img className="category-image" src={Category} alt="Category" />
                </div>
            </div>
        </div>
    </>
    )
}

export default Home