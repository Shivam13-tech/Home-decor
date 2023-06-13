const mongoose = require('mongoose')

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
        required: [true, "Please provide description of the project"]
    },
    images: {
        type: [String],
        required: [true, "Please provide atleast one image of the product"]  
    } 
})

const Seller = mongoose.model('Seller', sellerSchema)
module.exports = Seller