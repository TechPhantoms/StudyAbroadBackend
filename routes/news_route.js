const express = require('express');
const router = express.Router()
const News = require('../models/news_model')
const upload = require('../middleware/upload');
const { verifyAdmin} = require('../middleware/auth')

router.post('/news/insert',upload.single('Newsimage'),
function(req,res, next){
  
// console.log(req.file);
    const Newsimage = req.file.path;
    const NewsTitle = req.body.NewsTitle;
    const NewsDetails = req.body.NewsDetails;
    const title1 = req.body.title1;
    const content1 = req.body.content1;
    const title2 = req.body.title2;
    const content2 = req.body.content2;
    const title3 = req.body.title3;
    const content3 = req.body.content3;
    const title4 = req.body.title4;
    const content4 = req.body.content4;
    
    if(req.file == undefined)
    {
        res.status(401).json({success:false, message:"Invalid File"})
    }
    else
    {
        const Newsdata = new News({ 
            Newsimage : Newsimage , 
            NewsTitle: NewsTitle, 
            NewsDetails: NewsDetails,
            title1: title1,
            content1:content1,
            title2: title2,
            content2:content2,
            title3: title3,
            content3:content3,
            title4: title4,
            content4:content4,
        })
        Newsdata.save()

    .then(function(result){
        res.status(201).json({message : "News inserted!!", success: true})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
    }
    
})

//Update
// id - updated data from user
router.put('/news/update/:id',verifyAdmin,function(req,res){
    // const dimage = req.body.dimage;
    const NewsTitle = req.body.NewsTitle;
    const NewsDetails = req.body.NewsDetails;
    const id = req.params.id;
    // console.log("hello")
    News.updateOne({_id : id}, {
        // dimage : dimage,
        NewsTitle : NewsTitle,
        NewsDetails : NewsDetails,
      
    })
    .then (function(result){
        res.status(200).json({message : "Updated!!"})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})

//Delete
router.delete('/news/delete/:id',verifyAdmin,function(req,res){
    const id = req.params.id;
    News.deleteOne({_id : id})
    .then(function(result){
        res.status(200).json({message : "Deleted!!"})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})

router.get('/news/showall',function(req,res){
    News.find()
    .then(function(data){
     
        res.status(200).json({success: true, data: data})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})

router.get('/news/single/:id', function(req,res){
    const id = req.params.id;
    News.findOne({_id : id})
    .then(function(data){
        res.status(200).json(data)
    })
    .catch(function(e){
        res.status(500).json({error:e})
    })
})

module.exports = router;