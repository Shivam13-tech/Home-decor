const app = require("./app")
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({path: "./Protect/config.env"})

const DB = process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD)

mongoose.connect(DB,{
    useNewUrlParser: true,
}).then(function(connection){
    console.log("Connected to database")
})  

const port = process.env.PORT || 8080
app.listen(port,function(req,res){
    console.log(`Server started on port: ${port}`)
})