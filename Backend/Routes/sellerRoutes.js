const express = require('express')
const sellerController = require('../Controllers/sellerController')


const router = express.Router()

router
    .route('/')
    .post(sellerController.uploadimage,sellerController.resizePhoto,sellerController.addProduct)

module.exports = router