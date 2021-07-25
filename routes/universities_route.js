const express = require('express')
const router = express.Router()
const Universities = require('../models/universities_model')
const upload = require('../middleware/upload')

router.post('/universities/insert', upload.single('universityImage'), function(req,res,next){
    const universityImage = req.file.path;
    const universityName = req.body.universityName;
    const universityLocation = req.body.universityLocation;
    const universityType = req.body.universityType;
    const universityRank = req.body.universityRank;
    const internationalStudents = req.body.internationalStudents;
    const nationalities = req.body.nationalities;
    const totalPrograms = req.body.totalPrograms;
    const acceptanceRate = req.body.acceptanceRate;
    const countries = req.body.countries
    if(req.file == undefined){
        res.status(401).json({success:false, message:"Invalid File"})
    }
    else
    {
        const UniversitiesData = new Universities({
            universityImage : universityImage,
            universityName : universityName,
            universityLocation : universityLocation,
            universityType : universityType,
            universityRank : universityRank,
            internationalStudents : internationalStudents,
            nationalities : nationalities,
            totalPrograms : totalPrograms,
            acceptanceRate : acceptanceRate,
            countries : countries,
        })
        UniversitiesData.save()
        .then(function(data){
            res.status(201).json({message : "Universities Inserted!!", success : true, data : data})
        })
        .catch(function(e){
            res.status(500).json({error : e})
        })
    }

})

//Update
// id - updated data from user
router.put('/universities/update/:id', function(req,res){
    const universityName = req.body.universityName;
    const universityRank = req.body.universityRank;
    const id = req.params.id;
    Universities.updateOne({_id : id}, {
        universityName : universityName,
        universityRank : universityRank,
      
    })
    .then (function(result){
        res.status(200).json({message : "Updated!!"})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})

//Delete
router.delete('/universities/delete/:id', function(req,res){
    const id = req.params.id;
    Universities.deleteOne({_id : id})
    .then(function(result){
        res.status(200).json({message : "Deleted!!"})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})

//Display all 
router.get('/universities/showall', function(req,res){
    Universities.find()
    .then(function(data){
     
        res.status(200).json({success: true, data: data})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})


//Display one
router.get('/universities/single/:id', function(req,res){
    const id = req.params.id;
    Universities.findOne({_id : id})
    .then(function(data){
        res.status(200).json(data)
    })
    
    .catch(function(e){
        res.status(500).json({error : e})
    })
})
module.exports = router;