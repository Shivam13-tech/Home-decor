import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Actions/index';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems)

  const [description, Setdescription] = useState({})

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const toggleDescription = (productId) => {
    Setdescription((prevDescription) => ({
      ...prevDescription,
      [productId]: !prevDescription[productId]
    }));
  };

  const handleRemove = (productid) => {
    dispatch(removeFromCart(productid));
  };

  return (
    <div className='cart-comp'>
      {cartItems.map((product) => (
      <div className="slider-card" id={product._id}>
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
                            <button className="product-button" onClick={() => handleRemove(product._id)}>Remove</button>
                        </div>
                    </div>
                </div>
             ))}
    </div>
  );
}

export default Cart