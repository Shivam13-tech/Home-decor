const express = require('express')
const sellerController = require('../Controllers/sellerController')
const authController = require("../Controllers/authController")

const router = express.Router()

router
    .route('/')
    .post(authController.protect,sellerController.uploadimage,sellerController.resizePhoto,sellerController.addProduct)
    .get(authController.protect,sellerController.getSellerProduct)
   
 router
    .route('/:id')   
    .patch(authController.protect,sellerController.updateProduct)
    .delete(authController.protect,sellerController.deleteProduct)

    module.exports = router