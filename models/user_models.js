const mongoose = require('mongoose');

const User = mongoose.model('User', {
    firstname: {
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    userImage:{
        type:String,
    },
    resetToken: String,
    expireToken: Date,
    userType : {
        type : String,
        enum : ['Admin', 'User']
    },
})


module.exports = User