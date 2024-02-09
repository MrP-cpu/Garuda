const express = require('express');
const router  = express.Router();
// const userSchema = require("../types/user");
const { User, Documents } = require('../database/db');
const { Document } = require('mongoose');


router.post("/signup", async(req,res)=>{
  
    //const userValidation = userSchema.safeParse(req.body);
    // if(!userValidation.success){
    //     return res.status(404).json({
    //         msg: "Incorrect Inputs"
    //     })
    // }
    const newuser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        dob: req.body.dob,
        mobile: req.body.mobile,
       

        
    })
    if(newuser){
        res.json({
            msg: "User created Successfully"
        })
    }
    else{
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }
})

router.post("/documents" , async (req,res)=>{
    aadhar: req.body.aadhar;
    mobile: req.body.mobile;

    const newDoc = await Documents.create({
        aadhar: req.body.aadhar,
        mobile: req.body.mobile,

    })
    if(newDoc){
        res.json({
            msg: "Document added"
        })
    }
    else{
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }


})


module.exports= router;