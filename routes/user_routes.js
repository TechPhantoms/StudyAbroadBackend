const express = require('express');
const router = express.Router();
const { check, validationResult, Result } = require('express-validator')
const bcryptjs = require('bcryptjs');
const User = require('../models/user_models');
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const upload = require('../middleware/upload')


//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


//sending mail
const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: "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"
    }
}))

//register
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
    function (req, res) {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const firstname = req.body.firstname;
            const lastname = req.body.lastname;
            const email = req.body.email;
            const phone = req.body.phone;
            const username = req.body.username;
            const password = req.body.password;
            const userType = req.body.userType;

            bcryptjs.hash(password, 10, function (err, hash) {
                const data = new User({ firstname: firstname, lastname: lastname, email: email, phone: phone, username: username, password: hash, userType: userType })
                data.save()

                    .then(function (result) {

                        transporter.sendMail({
                            to: result.email,
                            from: "aakashkhatri9671@gmail.com",
                            subject: "Registration successful",
                            html: "<h1>Thank you for Joining Us!!</h1>"
                        })
                        //success message with status code
                        res.status(201).json({ message: "User account registered!!", data: result, success: true })
                    })
                    .catch(function (err) {
                        console.log(err)
                        res.status(500).json({ error: err })
                    })
            })
        }
        else {
            //invalid data from User
            res.status(202).json({"message":errors.array()[0].msg,success:false})
        }
    })





//login system

router.post('/login', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username: username })
        .then(function (accData) {
            if (accData === null) {
                //email or username not found...
                return res.status(401).json({ success: false, message: "Invalid credential!" })
            }

            //now lets compare the password...
            bcryptjs.compare(password, accData.password, function (err, result) {
                if (result === false) {
                    //username correct/password incorrect
                    return res.status(401).json({ success: false, message: "Invalid credential!!" })
                }

                //now lets generate token
                const token = jwt.sign({ accId: accData }, 'secretkey');
                res.status(200).json({ success: true, data: accData, token: token, message: "Auth success!!" })
            })
        })
        .catch(function (e) {
            console.log("token")
            res.status(500).json({ error: e })
        })
})


router.get('/display', function(req,res){
    User.find().then(function(data){
        res.send(data)
    })
})


//for delete
router.delete('/userdelete/:myid', function(req,res){
    const id = req.params.myid;
    User.deleteOne({_id : id}).then(function(){
        res.send('deleted!!')
    })
})



//for update
router.put('/userupdate/:myid', function(req,res){
    const id = req.params.myid;
    const username = req.body.username;
    const address = req.body.address;
    const firstname = req.body.firstname;

    User.updateMany({_id : id}, {username:username, address:address, firstname:firstname})
    .then(function(){
        res.send('Updated!!')

    })
})

router.put('/photo/:id', upload.single('file'), function(req,res){
    const id = req.params.id
    const file = req.file
    console.log(req.file)
    User.updateOne({_id:id},{
        userImage:file.filename
    })
    .then(function(result){
                res.status(200).json({success:true, message:'uploaded', data:result})
            })  
            .catch(function(err){
                res.status(500).json({
                    success:false,
                    error:err
                })
            })
        })




router.post('/reset-password', (req, res) => {
    //generating token
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err)
        }
        //we will get token and save it to token from buffer in form of hex code. so convert it to string)
        const token = buffer.toString("hex")
        User.findOne({ email: req.body.email })
        .then(data=>{

            if (!data) {
                return res.status(422).json({ error: "User dont exists with that email" })
            }

            data.resetToken = token
            data.expireToken = Date.now() + 3600000
            data.save()
            .then((result)=>{
                
                transporter.sendMail({
                    to: data.email,
                    from: "aakashkhatri9671@gmail.com",
                    subject: "password reset",
                    html: `
                <p>You requested for password reset</p>
                <h5>click in this <a href='http://localhost:90/reset/${token}'>link</a> to reset password </h5>

                `
                })
                res.json({ message: "check your email" })
            })
        })
            
    })
})

 // <h5>click in this <a href='http://localhost:3000/reset/${token}'>link</a> to reset password </h5>
//  <h5>click in this <a href="${EMAIL}/reset/${token}">link</a> to reset password</h5>



module.exports = router