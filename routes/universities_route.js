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
    const countries = req.body.countries;
    const studyAbroadPara1 = req.body.studyAbroadPara1; 
    const studyAbroadPara2 = req.body.studyAbroadPara2;
    const studyAbroadPara3 = req.body.studyAbroadPara3;
    const studyAbroadPara4 = req.body.studyAbroadPara4;
    const whyStudyTitle1 = req.body.whyStudyTitle1;
    const whyStudyPara1 = req.body.whyStudyPara1;
    const whyStudyTitle2 = req.body.whyStudyTitle2;
    const whyStudyPara2 = req.body.whyStudyPara2;
    const whyStudyTitle3 = req.body.whyStudyTitle3;
    const whyStudyPara3 = req.body.whyStudyPara3;
    const whyStudyTitle4 = req.body.whyStudyTitle4;
    const whyStudyPara4 = req.body.whyStudyPara4;
    const whyStudyTitle5 = req.body.whyStudyTitle5;
    const whyStudyPara5 = req.body.whyStudyPara5;
    const internationalLifePara1 = req.body.internationalLifePara1;
    const internationalLifePara2 = req.body.internationalLifePara2;
    const internationalLifePara3 = req.body.internationalLifePara3;
    const internationalLifePara4 = req.body.internationalLifePara4;
    const feeInformation1 = req.body.feeInformation1;
    const feeInformation2 = req.body.feeInformation2;
    const feeInformation3 = req.body.feeInformation3;
    const undergraduatefunding = req.body.undergraduatefunding;
    const undergraduatefundingAmount = req.body.undergraduatefundingAmount;
    const undergraduatefunding1 = req.body.undergraduatefunding1;
    const undergraduatefunding2 = req.body.undergraduatefunding2;
    const undergraduatefunding3 = req.body.undergraduatefunding3;
    const undergraduatefunding4 = req.body.undergraduatefunding4;
    const postgraduatefunding = req.body.postgraduatefunding;
    const postgraduateAmount = req.body.postgraduateAmount;
    const postgraduateFunding1 = req.body.postgraduateFunding1;
    const postgraduateFunding2 = req.body.postgraduateFunding2;
    const locationStreetName = req.body.locationStreetName;
    const locationStreetDetails = req.body.locationStreetDetails;
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
            studyAbroadPara1 : studyAbroadPara1,
            studyAbroadPara2 : studyAbroadPara2,
            studyAbroadPara3 : studyAbroadPara3,
            studyAbroadPara4 : studyAbroadPara4,
            whyStudyTitle1 : whyStudyTitle1,
            whyStudyPara1 : whyStudyPara1,
            whyStudyTitle2 : whyStudyTitle2,
            whyStudyPara2 : whyStudyPara2,
            whyStudyTitle3 : whyStudyTitle3,
            whyStudyPara3 : whyStudyPara3,
            whyStudyTitle4 : whyStudyTitle4,
            whyStudyPara4 : whyStudyPara4,
            whyStudyTitle5 : whyStudyTitle5,
            whyStudyPara5 : whyStudyPara5,
            internationalLifePara1 : internationalLifePara1,
            internationalLifePara2 : internationalLifePara2,
            internationalLifePara3 : internationalLifePara3,
            internationalLifePara4 : internationalLifePara4,
            feeInformation1 : feeInformation1,
            feeInformation2 : feeInformation2,
            feeInformation3 : feeInformation3,
            undergraduatefunding : undergraduatefunding,
            undergraduatefundingAmount : undergraduatefundingAmount,
            undergraduatefunding1 : undergraduatefunding1,
            undergraduatefunding2 : undergraduatefunding2,
            undergraduatefunding3 : undergraduatefunding3,
            undergraduatefunding4 : undergraduatefunding4,
            postgraduatefunding : postgraduatefunding,
            postgraduateAmount : postgraduateAmount,
            postgraduateFunding1 : postgraduateFunding1,
            postgraduateFunding2 : postgraduateFunding2,
            locationStreetName : locationStreetName,
            locationStreetDetails : locationStreetDetails
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