import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homewallpaper from "../Assets/home-wallpaper.jpg"
import Category from "../Assets/individual chair.jpg"

import { useSelector } from "react-redux";

function Home(){
    const auth = useSelector(function(state){
        return state.auth
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
    <>
        {/* <h1>{auth}</h1> */}
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
                <div className="slider-card">
                    <div className="slider-card-content"> 
                        <Slider {...settings}>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                        </Slider>
                    </div>
                    <div className="product-detail-container">
                        <div>
                            <h3 className="product-detail">Name:  Chair</h3>
                        </div>
                        <div>
                            <h3 className="product-detail">Price:  12$</h3>
                        </div>
                    </div>
                        <div>
                            <h3 className="product-detail">Category:  Hall</h3>
                        </div>
                    <div className="product-button-container">
                        <div>
                            <button className="product-button">Know more</button>
                        </div>
                        <div>
                            <button className="product-button">Buy now</button>
                        </div>
                    </div>
                </div>
                <div className="slider-card">
                    <div className="slider-card-content"> 
                        <Slider {...settings}>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                        </Slider>
                    </div>
                    <div className="product-detail-container">
                        <div>
                            <h3 className="product-detail">Name:  Chair</h3>
                        </div>
                        <div>
                            <h3 className="product-detail">Price:  12$</h3>
                        </div>
                    </div>
                        <div>
                            <h3 className="product-detail">Category:  Hall</h3>
                        </div>
                    <div className="product-button-container">
                        <div>
                            <button className="product-button">Know more</button>
                        </div>
                        <div>
                            <button className="product-button">Buy now</button>
                        </div>
                    </div>
                </div>
                <div className="slider-card">
                    <div className="slider-card-content"> 
                        <Slider {...settings}>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                        </Slider>
                    </div>
                    <div className="product-detail-container">
                        <div>
                            <h3 className="product-detail">Name:  Chair</h3>
                        </div>
                        <div>
                            <h3 className="product-detail">Price:  12$</h3>
                        </div>
                    </div>
                        <div>
                            <h3 className="product-detail">Category:  Hall</h3>
                        </div>
                    <div className="product-button-container">
                        <div>
                            <button className="product-button">Know more</button>
                        </div>
                        <div>
                            <button className="product-button">Buy now</button>
                        </div>
                    </div>
                </div>
                <div className="slider-card">
                    <div className="slider-card-content"> 
                        <Slider {...settings}>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                        </Slider>
                    </div>
                    <div className="product-detail-container">
                        <div>
                            <h3 className="product-detail">Name:  Chair</h3>
                        </div>
                        <div>
                            <h3 className="product-detail">Price:  12$</h3>
                        </div>
                    </div>
                        <div>
                            <h3 className="product-detail">Category:  Hall</h3>
                        </div>
                    <div className="product-button-container">
                        <div>
                            <button className="product-button">Know more</button>
                        </div>
                        <div>
                            <button className="product-button">Buy now</button>
                        </div>
                    </div>
                </div>
                <div className="slider-card">
                    <div className="slider-card-content"> 
                        <Slider {...settings}>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                        </Slider>
                    </div>
                    <div className="product-detail-container">
                        <div>
                            <h3 className="product-detail">Name:  Chair</h3>
                        </div>
                        <div>
                            <h3 className="product-detail">Price:  12$</h3>
                        </div>
                    </div>
                        <div>
                            <h3 className="product-detail">Category:  Hall</h3>
                        </div>
                    <div className="product-button-container">
                        <div>
                            <button className="product-button">Know more</button>
                        </div>
                        <div>
                            <button className="product-button">Buy now</button>
                        </div>
                    </div>
                </div>
                <div className="slider-card">
                    <div className="slider-card-content"> 
                        <Slider {...settings}>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                        </Slider>
                    </div>
                    <div className="product-detail-container">
                        <div>
                            <h3 className="product-detail">Name:  Chair</h3>
                        </div>
                        <div>
                            <h3 className="product-detail">Price:  12$</h3>
                        </div>
                    </div>
                        <div>
                            <h3 className="product-detail">Category:  Hall</h3>
                        </div>
                    <div className="product-button-container">
                        <div>
                            <button className="product-button">Know more</button>
                        </div>
                        <div>
                            <button className="product-button">Buy now</button>
                        </div>
                    </div>
                </div>
                <div className="slider-card">
                    <div className="slider-card-content"> 
                        <Slider {...settings}>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                            <div className="category-image-container">
                                <img className="category-image" src={Category} alt="Category" />
                            </div>
                        </Slider>
                    </div>
                    <div className="product-detail-container">
                        <div>
                            <h3 className="product-detail">Name:  Chair</h3>
                        </div>
                        <div>
                            <h3 className="product-detail">Price:  12$</h3>
                        </div>
                    </div>
                        <div>
                            <h3 className="product-detail">Category:  Hall</h3>
                        </div>
                    <div className="product-button-container">
                        <div>
                            <button className="product-button">Know more</button>
                        </div>
                        <div>
                            <button className="product-button">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home