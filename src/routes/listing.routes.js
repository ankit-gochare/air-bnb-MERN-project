const express = require('express')
const listingModel = require('../models/listing.model')

const listingRouter = express.Router()

// listingModel testing route
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

// get all listings route
listingRouter.get("/listings" , async(req,res)=>{
    const allListings = await listingModel.find({})

    res.render("listings/index.ejs" , {allListings});
})

module.exports = listingRouter