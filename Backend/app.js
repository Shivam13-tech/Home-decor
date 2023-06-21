const express = require('express')
const cors = require('cors');
const sellerRouter = require('./Routes/sellerRoutes')
const authRouter = require("./Routes/authRoutes")
const userRouter = require("./Routes/userRoutes")

const app = express()
// Enable CORS
app.use(cors());
app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/seller", sellerRouter)
app.use("/api/user", userRouter)

module.exports = app