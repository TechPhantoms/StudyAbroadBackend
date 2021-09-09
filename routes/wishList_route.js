const express = require('express');
const router = express.Router()
const WishList = require('../models/wishList_model');
const { verifyUser } = require('../middleware/auth');


router.post('/universities/wishlist', verifyUser, function(req,res){
    // console.log(req.user._id)

    const MyWishList = new WishList({
        UserId:req.User._id,
        Universities:req.body._id,
    })
    MyWishList.save().then(function(result){
        res.status(200).json({
            success:true, data: result
        })
    })
})

//display wishlist
router.get('/wishlist/showall', verifyUser, function(req,res){
    console.log('adding to fav')

    WishList.find({"UserId":req.User._id})
    .populate("Universities")
    .then((function(data){
        console.log(data)
        res.status(200).json({success :true, data:data})
    }))
})

//delete
router.delete('/wishlist/delete/:id', verifyUser, function(req,res){
    const id = req.params.id;
    WishList.deleteOne({_id : id})
    .then(function(result){
        res.status(200).json({ success : true, message: "University deleted" });
    })
    .catch(function (err) {
        res.status(500).json({ error: err });
      });
})

module.exports = router
