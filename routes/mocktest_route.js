const express = require('express')
const router = express.Router()
const MockTest = require('../models/mocktest_model')

router.post('/test/insert', function(req,res, next){
    const readingTitle = req.body.readingTitle;
    const readingPara = req.body.readingPara;
    // const readingPara2 = req.body.readingPara2;
    // const readingPara3 = req.body.readingPara3;
    // const readingPara4 = req.body.readingPara4;
    // const readingPara5 = req.body.readingPara5;
    const rquestion = req.body.rquestion;
    const roption =req.body.roption;
    // const roption2 =req.body.roption2;
    // const roption3 =req.body.roption3;
    // const roption4 =req.body.roption4;
    const rcorrectAnswer =req.body.rcorrectAnswer;

    const MockTestData = new MockTest({
        readingTitle : readingTitle,
        readingPara : readingPara,
        // readingPara2 : readingPara2,
        // readingPara3 : readingPara3,
        // readingPara4 : readingPara4,
        // readingPara5 : readingPara5,
        rquestion : rquestion,
        roption : roption,
        // roption2 : roption2,
        // roption3 : roption3,
        // roption4 : roption4,
        rcorrectAnswer : rcorrectAnswer,
    })
    MockTestData.save()
    .then(function(result){
        res.status(201).json({success : true, message : "MockTest question inserted!!"})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })

})

//display all
router.get('/test/showall', function(req,res){
    MockTest.find()
    .then(function(data){
        res.status(200).json({success : true, data : data})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})


//find by id
router.get('/test.single/id', function(req,res){
    const id = req.params.id;
    MockTest.findOne({_id : id})
    .then(function(data){
        res.status(200).json(data)
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})

module.exports = router;