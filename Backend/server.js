const app = require("./app")
const dotenv = require('dotenv')

dotenv.config({path: "./Protect/config.env"})

const port = process.env.PORT || 8080
app.listen(port,function(req,res){
    console.log(`Server started on port: ${port}`)
})