import React, {useEffect, useState} from "react";
import { useDispatch } from 'react-redux';
import {addToCart} from '../Actions/index'
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homewallpaper from "../Assets/home-wallpaper.jpg"


function Home(){
    const dispatch = useDispatch();

    const getAllProductsURL = 'http://127.0.0.1:8000/api/user'

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [allProducts, SetAllProducts] = useState([])  
    const [description, Setdescription] = useState({})

    const toggleDescription = (productId) => {
        Setdescription((prevDescription) => ({
          ...prevDescription,
          [productId]: !prevDescription[productId]
        }));
      };

    useEffect(() => {
        axios
        .get(getAllProductsURL)
        .then(function(response){
            console.log(response)
            const allProducts = response.data.Result;
            if (selectedCategory) {
                const filteredProducts = allProducts.filter(product => product.category === selectedCategory);
                SetAllProducts(filteredProducts);
            } else {
                SetAllProducts(allProducts);
            }
        }).catch(error => {
            console.log(error)
        }) 
    },[selectedCategory])

    const handleBUY = (product) => {
        dispatch(addToCart(product));
    }

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
                <button className="home-categories" onClick={() => setSelectedCategory(null)}>All</button>
                <button className="home-categories" onClick={() => setSelectedCategory("Hall")}>Hall</button>
                <button className="home-categories" onClick={() => setSelectedCategory("Bedroom")}>Bedroom</button>
                <button className="home-categories" onClick={() => setSelectedCategory("Balcony")}>Balcony</button>
                <button className="home-categories" onClick={() => setSelectedCategory("Kitchen")}>Kitchen</button>
                <button className="home-categories" onClick={() => setSelectedCategory("Bathroom")}>Bathroom</button>
            </div>
            {allProducts.map(function(product){
                return <div className="category-container" id={product._id}>
                <div className="slider-card">
                    <div className="slider-card-content"> 
                        <Slider {...settings}>
                            <div className="category-image-container">
                                <img className="category-image" src={`http://localhost:8000/${product.images[0]}`} alt="Category" />  
                            </div>
                            <div className="category-image-container">
                                <img className="category-image" src={`http://localhost:8000/${product.images[1]}`} alt="Category" />
                            </div>
                            <div className="category-image-container">
                                <img className="category-image" src={`http://localhost:8000/${product.images[2]}`} alt="Category" />
                            </div>
                        </Slider>
                    </div>
                    <div className="product-detail-container">
                        <div>
                            <h3 className="product-detail">Name:  {product.name}</h3>
                        </div>
                        <div>
                            <h3 className="product-detail">Price:  {product.price}</h3>
                        </div>
                    </div>
                        <div>
                            <h3 className="product-detail">Category:  {product.category}</h3>
                        </div>
                        {description[product._id] ? (
                            <div>
                                <h3 className="product-detail">Description:  {product.description}</h3>
                            </div> ) : null}
                    <div className="product-button-container">
                        <div>
                            <button className="product-button" onClick={() => toggleDescription(product._id)}>{description[product._id] ? 'Know less' : 'Know more'}</button>
                        </div>
                        <div>
                            <button className="product-button" onClick={() => handleBUY(product)}>Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
            })}
        </div>
    </>
    )
}

export default Home