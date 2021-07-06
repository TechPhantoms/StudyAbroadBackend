const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs');
const User = require('../models/user_models');
const jwt = require('jsonwebtoken')


router.post('/register', [
    check('firstname', "Firstname is required").not().isEmpty(),
    check('lastname', "Lastname is required!").not().isEmpty(),
    check('email', "Invalid email!").isEmail(),
    check('email', "Email is required!").not().isEmpty(),
    check('phone', "Phone number is required!").not().isEmpty(),
    check('phone', "Invalid Phone number!").isMobilePhone(),
    check('username', "Username is required!").not().isEmpty(),
    check('password', "Password is required!").not().isEmpty()
], 
function(req,res){
    const errors = validationResult(req);
    if(errors.isEmpty()){
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const phone = req.body.phone;
        const username = req.body.username;
        const password = req.body.password;

        bcryptjs.hash(password, 10, function(err, hash){
            const data = new User({firstname:firstname, lastname : lastname, email : email, phone : phone, username : username, password : hash})
            data.save()

            .then(function(result){
                //success message with status code
                res.status(201).json({message: "User account registered!!", data:result, success:true})
            })
            .catch(function(err){
                res.status(500).json({error : err})
            })
        })
    }
    else{
        //invalid data from User
        res.status(202).json(errors.array())
    }
})

//login system

router.post('/login', function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username : username})
    .then(function(accData){
        if(accData === null){
             //email or username not found...
             return res.status(401).json({success:false,message : "Invalid credential!"})    
        }

        //now lets compare the password...
        bcryptjs.compare(password, accData.password, function(err, result){
            if(result===false){
                //username correct/password incorrect
                return res.status(401).json({success: false, message: "Invalid credential!!"})
            }

            //now lets generate token
            const token = jwt.sign({accId : accData}, 'secretkey');
            res.status(200).json({success:true, data: accData, token: token, message: "Auth success!!"}) 
        })
    })
    .catch(function(e){
        console.log("token")
        res.status(500).json({error : e})
    })
})


module.exports = router