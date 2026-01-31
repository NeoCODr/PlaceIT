
const postModal = require("../models/posts")
const Postmodel = require("../models/posts")
const User = require("../models/user")

exports.addpost = async(req, res)=>{
    try {
        const {title,job_type,company_name,salary,location ,logo, description} = req.body
        let userId = req.user._id
        
        // const name = await User.findById(userId)
        const addpost = new Postmodel({user :userId , description ,title , job_type , company_name , salary , location , logo})

        if(!addpost){
            return res.status(400).json({error:"Something went wrong"})
        }
        // res.status(200).json({Posted_By:user.f_name})
        
        await addpost.save()
        return res.status(200).json({
            message:"posted Successsfully",
            post:addpost
        })
        
    } catch (err) {
        res.status(500).json({error:'Server Error', message:err.message})
    }
}

exports.findpost = async(req,res)=>{
    const post = await Postmodel.find()
    // console.log(post)
    return res.status(200).json({data: post})
}


exports.postdesc = async(req, res)=>{
 const { id } = req.params
 const isExist = await postModal.findById(id)
 return res.status(200).json({data: isExist})
 console.log(isExist)

 if(!isExist){
    console.log("User not exist")
 }
 

}