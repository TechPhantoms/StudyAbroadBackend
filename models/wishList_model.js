const mongoose = require('mongoose');
const date = new Date()

const WishList = mongoose.model('MyWishList',{
   
    UserId : {
        type:mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },

    // Person:{
    //     type: Number,
    //     default:1
    // },

    Universities: {
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref: 'Universities'
    },
    // Date: {
    //     type:String,
    //     default:date.getDate()
    // }

  
})


module.exports = WishList;