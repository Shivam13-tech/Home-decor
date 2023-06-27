const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please tell us your name!']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false           
    },
    confirmPassword:{
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            // This only works on CREATE and SAVE!!!
            validator: function(el) {
              return el === this.password;
            },
            message: 'Passwords are not the same!'
          }
    },
    type:{
        type: String,
        required: [true, 'Please provide account type']
    }
})

userSchema.pre('save',async function(next){
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12)
    this.confirmPassword = undefined
    next()
})

const User = mongoose.model('User', userSchema)
module.exports = User;