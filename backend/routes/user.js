const express = require('express');
const router  = express.Router();
// const userSchema = require("../types/user");
const { User } = require('../database/db');


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
module.exports= router;