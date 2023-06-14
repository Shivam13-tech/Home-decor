const express = require('express')
const sellerRouter = require('./Routes/sellerRoutes')
const userRouter = require("./Routes/userRoutes")

const app = express()
app.use(express.json())

app.use("/api/users", userRouter)
app.use("/api/seller", sellerRouter)

module.exports = app