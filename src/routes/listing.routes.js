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

// new route
listingRouter.get("/listings/new" , (req,res)=>{
    res.render("listings/new.ejs")
})
// is route ko niche rkha to :id 
// new ko bhi id smjhega

// create route
listingRouter.post("/listings", async (req,res)=>{
    // let listing = req.body.listing;
    // console.log(listing);
    const newListing = new listingModel(req.body.listing);

    await newListing.save();

    res.redirect("/listings");
})

// show route // individual listings
listingRouter.get("/listings/:id" , async(req,res)=>{
    let {id} = req.params;
    const listing = await listingModel.findById(id);

    res.render("listings/show.ejs" , {listing});
})

// edit route
listingRouter.get("/listings/:id/edit" , async(req,res)=>{
    let {id} = req.params;
    const listing = await listingModel.findById(id);

    res.render("listings/edit.ejs" , {listing})
})

// update route
listingRouter.put("/listings/:id" , async(req,res)=>{
    let {id} = req.params
    await listingModel.findByIdAndUpdate(id , {...req.body.listing});
    res.redirect(`/listings/${id}`)
})

// delete route
listingRouter.delete("/listings/:id" ,async (req,res)=>{
    let {id} = req.params
    let deletedListing = await listingModel.findByIdAndDelete(id)

    console.log(deletedListing)
    res.redirect("/listings")
})



module.exports = listingRouter