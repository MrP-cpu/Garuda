const express = require('express');
const { Admin } = require('../database/db');
const router  = express.Router();

router.post("/signup",async(req,res)=>{
    const newAdmin = await Admin.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile,
        serviceNo: req.body.serviceNo,
        branchNo: req.body.branchNo
    })
    if(newAdmin){
        res.json({
            msg: "admin created successfully"
        })
    }
    else{
        res.status(500).json({
            msg: "Internal server error"
        })
    }
    
})

module.exports= router;