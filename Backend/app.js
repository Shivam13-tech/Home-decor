const express = require('express')
const sellerRouter = require('./Routes/sellerRoutes')
const authRouter = require("./Routes/authRoutes")
const userRouter = require("./Routes/userRoutes")

const app = express()
app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/seller", sellerRouter)
app.use("/api/user", userRouter)

module.exports = app