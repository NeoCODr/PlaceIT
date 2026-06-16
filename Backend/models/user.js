const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    googleID: {
        type: String
    },

    email: {
        type: String,
        require:true
    },

    password: {
        type: String
    },

    f_name: {
        type: String,
        default: ""
    },

    info: {
        type: String,
        default: ""
    },
    curr_company: {
        type: String,
        default: ""
    },
    appliedcom:{
        type:[String],
        default:[]
    },
    curr_location: {
        type: String,
        default: ""
    },
    profile_pic: {
        type: String,
        default:"./assets/profilepic.png"
    },
    coverpic: {
        type: String,
        default: "./assets/profilepic.png"
    },
    about: {
        type: String,
        default: ""
    },
    skills: {
        type: [String],
        default: []
    },
    exp: [
        {
            designation: {
                type: String,
                default: ""
            },
            company_name: {
                type: String,
                default: ""
            },
            duration: {
                type: String,
                default: ""
            },
            location: {
                type: String,
                default: ""
            },
        }


    ],
    resume:{
        type:String,
        default:""
    }
},{timestamps:true})

const useModel = mongoose.model('user',UserSchema)
module.exports= useModel