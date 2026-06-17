const express = require("express");
const route = express.Router();
const usercontroller = require("../controller/user")
const authentication = require('../authentication/auth')

route.post('/register' , usercontroller.register)
route.post('/login', usercontroller.login)
route.post('/google', usercontroller.glogin)
route.post('/emaillogin',usercontroller.emaillogin)
route.put('/update', authentication.auth , usercontroller.updateUser)
route.put('/applied', authentication.auth , usercontroller.appliedcom)
route.put('/profile/:id', usercontroller.getprofilebyid)
route.post('/logout', authentication.auth,usercontroller.logout)
route.post('/coverpic', usercontroller.coverpic) //cover picture

route.get('/self', authentication.auth, (req , res) =>{
    return res.status(200).json({
        user: req.user    
    })
}) 

module.exports=route