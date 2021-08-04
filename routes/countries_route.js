const express = require('express')
const router = express.Router()
const Countries = require('../models/countries_model')
const upload = require('../middleware/upload')

router.post('/countries/insert', upload.single('countryImage','countryPicture'), function(req,res, next){
    const countryImage = req.file.path;
    const countryName = req.body.countryName;
    // const countryPicture = req.file.path;
    const whyStudy = req.body.whyStudy;
    const programs = req.body.programs;
    const subjects = req.body.subjects;
    const cost = req.body.cost;
    const qualifications = req.body.qualifications;
    const languageTest = req.body.languageTest;
    const studentVisa = req.body.studentVisa;
    const howStudy = req.body.howStudy;



    if(req.file == undefined){
        res.status(401).json({success:false, "message": "Invalid File"})
    }
    else
    {
        const CountriesData = new Countries({
            countryImage : countryImage,
            countryName: countryName,
            // countryPicture : countryPicture,
            whyStudy : whyStudy,
            programs : programs,
            subjects : subjects,
            cost : cost,
            qualifications : qualifications,
            languageTest : languageTest,
            studentVisa : studentVisa,
            howStudy : howStudy
        })
        CountriesData.save()
        .then(function(result){
            res.status(201).json({success: true, message : "Countries Inserted!!"})
        })
        .catch(function(e){
            res.status(500).json({error : e})
        })
    }
})

//update
router.put('/countries/update/:id', function(req,res){
    const countryName = req.body.countryName;
    const id = req.params.id;

    Countries.updateOne({_id : id},{
        countryName : countryName
    })
    .then(function(result){
        res.status(200).json({message : "Updated!!"})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})

//Delete
router.delete('/countries/delete/:id', function(req,res){
    const id = req.params.id;
    Countries.deleteOne({_id : id})
    .then(function(result){
        res.status(200).json({message : "Deleted!!"})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})

//Display all 
router.get('/countries/showall', function(req,res){
    Countries.find()
    .then(function(data){
     
        res.status(200).json({success: true, data: data})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})

//Find by id
router.get('/countries/single/:id', function(req,res){
    const id = req.params.id;
    Countries.findOne({_id : id})
    .then(function(data){
        res.status(200).json(data)
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})


module.exports = router;