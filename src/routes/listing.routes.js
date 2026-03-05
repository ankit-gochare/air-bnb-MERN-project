const express = require('express')
const listingModel = require('../models/listing.model')

const listingRouter = express.Router()

// listingRouter.get("/testListing" , async (req,res)=>{
//     let sampleListing = new listingModel({
//         title:"Test Villa",
//         description:"By the beach",
//         price:1200,
//         location:"Calangute, Goa",
//         country:"India"
//     })

//     await sampleListing.save()
//     console.log("sample was saved")
//     res.send("successful testing")
// })

module.exports = listingRouter