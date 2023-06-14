const express = require('express')
const sellerController = require('../Controllers/sellerController')
const authController = require("../Controllers/authController")

const router = express.Router()

router
    .route('/')
    .post(authController.protect,sellerController.uploadimage,sellerController.resizePhoto,sellerController.addProduct)

module.exports = router