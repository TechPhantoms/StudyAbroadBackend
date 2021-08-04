const express = require('express')
const router = express.Router()
const Comment = require('../models/comment_model')

router.post('/insert/comment', function(req,res, next){
    const user= req.body.user;
    const university = req.body.university;
    const comment = req.body.comment;
    const commentReply = req.body.commentReply;

    const CommentData = new Comment({
        user : user,
        university : university,
        comment : comment,
        commentReply : commentReply,
    })
    CommentData.save()
    .then(function(result){
        res.status(201).json({success : true, message: 'Comment Inserted!!'})
    })
    .catch(function(err){
        res.status(500).json({error : err})
    })
})

//update
router.post('/comment/update/:id', function(req,res){
    const comment = req.body.comment;
    const commentReply = commentReply;
    const id = req.params.id;

    Comment.updateMany({_id : id}, {
        comment : comment,
        commentReply : commentReply
    })
    .then(function(result){
        res.status(200).json({message : "Updated!!"})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})

//delete
router.delete('/comment/delete/:id', function(req,res){
    const id = req.params.id;

    Comment.deleteOne({_id : id})
    .then(function(result){
        res.status(200).json({message : "Deleted!!"})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})

//Display all
router.get('/comment/showall', function(req,res){
    Comment.find().populate("user")
        .then(function(data){
            res.status(200).json({success: true, data: data})
        })
        .catch(function(e){
            res.status(500).json({error : e})
        })
})

//find by id
router.get('/comment/single/:id', function(req,res){
    const id = req.params.id;

    Comment.findOne({_id : id})
    .then(function(data){
        res.status(200).json(data)
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})

module.exports = router;