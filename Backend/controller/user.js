const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const { OAuthClient, OAuth2Client } = require("google-auth-library")
const jwt = require("jsonwebtoken")


const cookieOption = {
    httpOnly: true,
    secure: false,
    sameSite: 'Lax'
}




exports.register = async (req, res) => {
    try {
        let { email, f_name, password } = req.body;
        let isUserExist = await User.findOne({ email });
        if (isUserExist) {
            return res.status(400).json({ error: "User alrady exist" })
        }

        const updatedpass = await bcryptjs.hash(password, 10)
        // console.log(updatedpass)

        const newUser = new User({ email, f_name, password: updatedpass })

        await newUser.save()

        return res.status(201).json({ message: "User registered successfully", success: "yes", data: newUser })

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'server error', message: err.message })
    }


}



exports.login = async (req, res) => {
    try {
        let { f_name, password } = req.body;
        const Userexist = await User.findOne({ f_name })
        if (Userexist && await bcryptjs.compare(password, Userexist.password)) {
            let token = jwt.sign({ userId: Userexist._id }, process.env.JWT_PRIVATE_KEY);
            res.cookie("token", token, cookieOption)

            return res.json({ message: "Logged in successfully", success: "true", Userexist })
        } else {
            return res.status(400).json({ error: "Invalid Credentials.Please try again" })
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'server error', message: err.message })
    }
}


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

exports.glogin = async (req, res) => {
    try {
        const { token } = req.body
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        const payload = ticket.getPayload()
        const { sub, email, name, picture } = payload
        let UserExist = await User.findOne({ email })

        if (!UserExist) {
            UserExist = await User.create({
                googleID: sub,
                email,
                f_name: name,
                profile_pic: picture
            })}
          
            let jwttoken = jwt.sign({ userId: UserExist._id }, process.env.JWT_PRIVATE_KEY);
            res.cookie("token", jwttoken, cookieOption)
            return res.status(200).json({ user: UserExist })

    } catch (err) {
        res.status(500).json({ error: "Server Error", message: err.message })
    }

}


exports.emaillogin = async (req, res) => {
    try {
        const { email, password } = req.body
        let Userexist = await User.findOne({ email })
        if (Userexist && await bcryptjs.compare(password, Userexist.password)) {
            let jwttoken = jwt.sign({ userId: Userexist._id }, process.env.JWT_PRIVATE_KEY);
            res.cookie("token", jwttoken, cookieOption)
            return res.json({ message: "Logged in successfully", success: "true", Userexist })
        } else {
            return res.status(400).json({ error: "Invalid Credentials.Please try again" })
        }

    } catch (err) {
        res.status(500).json({ error: "Server Error", message: err.message })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const  {user}  = req.body
        const isExist = await User.findById(req.user._id)
        if (!isExist) {
            return res.status(400).json({ error: "User Dosent Exist" })
        }
        const updatedata = await User.findByIdAndUpdate(isExist._id, user)
        

        const updateduser = await User.findById(req.user._id)
        res.status(200).json({
            message: 'Updated Succesfully',
            data: updateduser
        })

    } catch (err) {
        res.status(500).json({ error: "Server Error", message: err.message })
    }
}


exports.getprofilebyid= async(req,res)=>{
    try {
    const { id } = req.params
    const isExist = await User.findById(id)
    res.status(201).json({isExist})
    

    } catch (err) {
        res.status(500).json({ error: "Server Error", message: err.message })
    }
}


exports.logout=async(req,res)=>{
    res.clearCookie("token" , cookieOption).json({message:"logged Out Successfully"})
}