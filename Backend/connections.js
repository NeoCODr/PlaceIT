const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/Placeit').then(res=>(
    console.log("Database successfully connected"

    ))).catch(err=>(
        console.log(err)
    ))