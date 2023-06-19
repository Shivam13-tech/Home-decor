const Seller = require('../Models/sellerModel')

exports.getAllProduct = async function(req,res,next){
    try {
        const data = await Seller.find({})
        res
            .status(200)
            .json({
                status: 'Success',
                Result: data
            })
        } 
        catch (err) {
            res.status(500).json({
              status: 'Failed',
              message: 'Something went wrong',
              error: err.message,
            });
        }
}

exports.getOneProduct = async function(req,res,next){
    try{
        const id = req.params.id
        const data = await Seller.findById(id)
        res
        .status(200)
        .json({
            status: 'Success',
            Result: data
        })
    }
    catch (err) {
            res.status(500).json({
              status: 'Failed',
              message: 'Something went wrong',
              error: err.message,
            });
    }
}

