import React, {useState} from "react";
import axios from 'axios';

import { useSelector } from "react-redux";

import individualChair from "../Assets/individual chair.jpg"

function Seller(){

    const auth = useSelector(function(state){
        return state.auth
    })

    const addProductURL = 'http://127.0.0.1:8000/api/seller'
    const [productdetail, Setproductdetail] = useState({
        name: '',
        price: '',
        description: '',
        category: 'Select'
    })
    const [productimages, Setproductimages] = useState([])
    const [error, setError] = useState('');

    function handleforminput(event){
        Setproductdetail({
            ...productdetail,
            [event.target.name]: event.target.value
        })
    }

    function handleImageChange(event){
        const files = event.target.files;
        const fileArray = Array.from(files);
    
        if (fileArray.length > 3) {
          setError('You can only upload a maximum of 3 images');
          Setproductimages([]);
        } else {
          setError('');
          Setproductimages(fileArray);
        }
    }

    function formsubmit(event){
        event.preventDefault()
        
        const formdata = new FormData()
        formdata.append('name', productdetail.name)
        formdata.append('price', productdetail.price)
        formdata.append('description', productdetail.description)
        formdata.append('category', productdetail.category)
        productimages.forEach((image) => {
            formdata.append('images', image)
        })

        axios.post(addProductURL,formdata, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${auth}`
            },
          })
        .then(function(response){
            console.log(formdata)
            console.log(response)
            Setproductdetail({
                name: '',
                price: '',
                description: '',
                category: 'Select'
            })
            Setproductimages([])
            document.getElementById('files').value = '';
        }).catch(error => {
            console.log(error)
        })    
    }

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
                        <label htmlFor="Productname" className="add-product-label">Product name:</label>
                        <input name="name" type="text" className="add-product-input" value={productdetail.name} onChange={handleforminput}/>
                        <label htmlFor="Productprice" className="add-product-label">Product price:</label>
                        <input name="price" type="text" className="add-product-input" value={productdetail.price} onChange={handleforminput}/>
                        <label htmlFor="Productdesc" className="add-product-label">Product description:</label>
                        <textarea name="description" id="Productdesc" className="add-product-input" value={productdetail.description} onChange={handleforminput}></textarea>
                        <label htmlFor="type" className="form-label">Choose product category</label>
                        <select name="category" className="form-dropdown" value={productdetail.category} onChange={handleforminput}>
                            <option value="Select">Select</option>
                            <option value="Hall">Hall</option>
                            <option value="Kitchen">Kitchen</option>
                            <option value="Balcony">Balcony</option>
                            <option value="Bathroom">Bathroom</option>
                            <option value="Bedroom">Bedroom</option>
                        </select>
                        <label htmlFor="files" className="add-product-label">Select images to upload:</label>
                        <input type="file" id="files" name="files" multiple style={{marginTop: "1vh"}} onChange={handleImageChange}/>
                        {error && <p>{error}</p>}
                        <button className="add-product-button" onClick={formsubmit}>Add product</button>
                    </div>
                </div>
            </div>
            {/* <div>
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
            </div> */}
        </div> 
        </>
    )
}

export default Seller