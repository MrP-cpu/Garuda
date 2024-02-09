const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://naruto:jVSNMMGwfSVPzHXV@cluster0.78poq1d.mongodb.net/Garuda");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    dob: String,
    mobile: Number
    
})

const adminSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    mobile: Number,
    serviceNo: Number,
    branchNo: Number

})

const authenticationDataSchema = new mongoose.Schema({
    aadhar: Number,
    mobile: Number
})

const documentSchema= new mongoose.Schema({
    aadhar: String,
    mobile: String
})

const User = mongoose.model("user",userSchema);
const Admin = mongoose.model("admin",adminSchema);
const AuthData = mongoose.model("authData",authenticationDataSchema);
const Documents = mongoose.model("documents",documentSchema)

module.exports={
    User,
    Admin,
    AuthData,
    Documents
}
