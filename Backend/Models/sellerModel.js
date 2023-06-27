const mongoose = require('mongoose')
const User = require('./userModel')

const sellerSchema = new mongoose.Schema({            // Name, price,description,images
    name: {
        type: String,
        required: [true, "Please provide name of the product"]
    },
    price: {
        type: String,
        required: [true, "Please provide price of the product"]
    },
    description: {
        type: String,
        required: [true, "Please provide description of the product"]
    },
    category:{
        type: String,
        required: [true, "Please provide category of the product"]
    },
    images: {
        type: [String],
        required: [true, "Please provide atleast one image of the product"]  
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    } 
})

const Seller = mongoose.model('Seller', sellerSchema)
module.exports = Seller