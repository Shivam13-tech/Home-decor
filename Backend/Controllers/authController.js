const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { promisify } = require('util');  
const User = require('../Models/userModel')


const signToken = function(id){
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN
      })
}

const createSendToken = (Info,statuscode,res)=>{
    const Token = signToken(Info._id)
    Info.password = undefined // Removes password field when we send the data back as response
    res.cookie('jwt', Token,{
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        secure: true,  // So its only shared with HTTPS
        httpOnly: true // So its only stored and resend not modified in anyway
    })
    Info.password = undefined  //so that we dont get the password on token response
    res
        .status(statuscode)
        .json({
            status: "Success",
            Token,
            Data: { Info }
        })
}

exports.signup = async function(req,res,next){
    try{
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
        })
        createSendToken(newUser,201,res)
    }
    catch(err){
        console.log(err)
        res
            .status(404)
            .json({
                status: "Failed",
                Message: "Something went wrong"
            })
    }
}

exports.login = async function(req,res,next){
    const {email, password} = req.body

    // 1) Check if email and password exist
    if(!email || !password){
        res.status(401).json({
            status: "Failed",
            Message: "Please provide email and password"
        })
    }
    // 2) Find the user and get hidden password also
    const user = await User.findOne({email}).select('+password')

    // 3) Check if the user exist and the password provided is correct
    if(!user || !(await bcrypt.compare(password, user.password))){
        res.status(401).json({
            status: "Failed",
            Message: "Please provide valid email and password"
        })
    } else {
        createSendToken(user,200,res)
    }
}

exports.protect = async function(req,res,next){ 
    try {
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1]
        }
        if(!token){
            res.status(401).json({
                status: "Failed",
                Message: "Please provide valid email and password"
            })
        }
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        const currentUser = await User.findById(decoded.id)
        if(!currentUser){
            res.status(401).json({
                status: "Failed",
                Message: "The user no longer exist"
            })
        }

        req.userID = currentUser._id
        next()
    }
    catch (error) {
        console.log(error)
        // Handle any error that occurred during verification
        return res.status(401).json({
          status: 'Failed',
          message: 'Invalid token',
        });
      }
}
