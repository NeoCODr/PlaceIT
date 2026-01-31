const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },

    title: {
        type: String,
        require: true
    },
    job_type: {
        type: String,
        require: true
    },
    company_name: {
        type: String,
        require: true
    },
    salary: {
        type: String,
        default: "Not Mentioned"
    },
    description:{
        type: String,
        require:true
    },
    location: {
        type: String,
        require: true
    },
    logo: {
        type: String,
        

    }
}, { timestamps: true })

const postModal = mongoose.model("jobposting", postSchema)
module.exports = postModal