const express = require('express')
const sellerController = require('../Controllers/sellerController')
const authController = require("../Controllers/authController")

const router = express.Router()

router
    .route('/')
    .post(sellerController.uploadimage,sellerController.resizePhoto,sellerController.addProduct) //  authController.protect,
    .get(authController.protect,sellerController.getSellerProduct)
   
 router
    .route('/:id')   
    .patch(authController.protect,sellerController.updateProduct)
    .delete(authController.protect,sellerController.deleteProduct)

    module.exports = router