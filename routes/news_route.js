const express = require('express');
const router = express.Router()
const News = require('../models/news_model')
const upload = require('../middleware/upload');

router.post('/news/insert',upload.single('Newsimage'),
function(req,res, next){
  
// console.log(req.file);
    const Newsimage = req.file.path;
    const NewsTitle = req.body.NewsTitle;
    const NewsDetails = req.body.NewsDetails;
    
    if(req.file == undefined)
    {
        res.status(401).json({"success":false,"message":"Invalid File"})
    }
    else
    {
        const Newsdata = new News({ Newsimage : Newsimage , NewsTitle: NewsTitle, NewsDetails: NewsDetails})
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
router.put('/news/update/:id', function(req,res){
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


router.get('/news/showall', function(req,res){
    News.find()
    .then(function(data){
     
        res.status(200).json({success: true, data: data})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})



module.exports = router;