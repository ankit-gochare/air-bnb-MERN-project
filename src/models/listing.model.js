const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    image:{
        type:String,
        default:"https://www.freepik.com/free-vector/home-location-icon-isolated_10601234.htm#from_element=cross_selling__vector",
        set:(v) =>
            v===""
                ?"https://www.freepik.com/free-vector/home-location-icon-isolated_10601234.htm#from_element=cross_selling__vector"
                :v,
    },
    price:{
        type:Number
    },
    location:{
        type:String
    },
    country:{
        type:String
    }
})

const listingModel = mongoose.model("listing" , listingSchema)

module.exports = listingModel