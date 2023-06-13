exports.addProduct = function(req,res,next){
    res
        .status(200)
        .json({
            status: "Success",
            message: "Testing controller"
        })
}