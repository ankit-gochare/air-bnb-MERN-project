const mongoose = require('mongoose')

async function connectDB(){
        mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("Connected to DB");
        })
        .catch((err)=>{
            console.log("Error in connecting to Db")
            process.exit(1)
        })
}

module.exports = connectDB