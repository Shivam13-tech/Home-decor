const Seller = require('../Models/sellerModel')
const multer = require('multer')
const sharp = require('sharp')

// const multerStorage = multer.diskStorage({
//     destination: (req,file,callback) => {
//         callback(null, 'public')
//     },
//     filename: (req,file,callback) => {
//         const ext = file.mimetype.split('/')[1]
//         callback(null, `product-${Date.now()}.${ext}`)
//     }
// })

const multerStorage = multer.memoryStorage()

const multerFilter = (req,file,callback) => {
    if (file.mimetype.startsWith('image')) {
        callback(null, true);
    } else {
        callback(null, false);
        return callback(new Error('Please upload a valid image'));
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
})

exports.uploadimage = upload.array('images', 3)

exports.resizePhoto = async (req,res,next) => {
    try{
        if(!req.files) return next()
        req.body.images = []
        await Promise.all(req.files.map(async (file,index) => {
            const filename = `product-${Date.now()}-${index + 1}.jpeg`

            await sharp(file.buffer)
            .resize(500,500)
            .toFormat('jpeg')
            .jpeg({quality: 90})
            .toFile(`public/${filename}`)

            req.body.images.push(filename)
        }))
        next()
    }catch(err){
        res
            .status(404)
            .json({
                status: "Failed",
                Message: "Something went wrong"
            })
    }
}


exports.addProduct = async function(req,res,next){
    try {
        const sellerid = req.userID.toString()
        const { name, price, description,category } = req.body;
        const images = req.body.images || []; // If no images were uploaded, default to an empty array
    
        // Create a new instance of the Seller model with the product information
        const newProduct = new Seller({
          name,
          price,
          description,
          category,
          images,
          seller: sellerid
        });
    
        // Save the product to the database
        const savedProduct = await newProduct.save();
    
        res.status(200).json({
          status: 'Success',
          message: 'Product added successfully',
          data: savedProduct,
        });
      } catch (err) {
        res.status(500).json({
          status: 'Failed',
          message: 'Something went wrong',
          error: err.message,
        });
      }
}

exports.getSellerProduct = async function(req,res,next){
    try {
        const sellerid = req.userID.toString()
        const sellerProduct = await Seller.find({seller: sellerid})
        res
            .status(200)
            .json({
                status: "Success",
                Result: sellerProduct
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

exports.deleteProduct = async function(req,res,next){
    try{
        const id = req.params.id
        await Seller.findByIdAndDelete(id)
        res
            .status(204)
            .json({
                status: "Success",
                message: "Product deleted"
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

exports.updateProduct = async function(req,res,next){
    try{
        const id = req.params.id
        console.log(req.body)
        const data = await Seller.findByIdAndUpdate(id,{$set: req.body},{ new: true })
        res
            .status(201)
            .json({
                status: "Success",
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