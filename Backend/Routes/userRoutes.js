const express = require('express')
const userController = require('../Controllers/userController')
const authController = require('../Controllers/authController')

const router = express.Router()

router
    .route('/')
    .get(userController.getAllProduct)

router
    .route('/:id')
    .get(userController.getOneProduct)

module.exports = router