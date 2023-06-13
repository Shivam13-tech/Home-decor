const express = require('express')
const sellerRouter = require('./Routes/sellerRoutes')

const app = express()
app.use(express.json())

app.use("/api/seller", sellerRouter)

module.exports = app