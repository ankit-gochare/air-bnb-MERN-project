require('dotenv').config({ path: '../.env' });

const mongoose = require('mongoose')
const listingModel = require('../src/models/listing.model')

const initData = require('./data')
const connectDb = require('../src/config/db')

const initDB = async ()=>{

    try{

        await connectDb();
        await listingModel.deleteMany({});
        await listingModel.insertMany(initData.data);

        console.log("Data initialized")

        mongoose.connection.close()
    }
    catch(err){
        console.log(err)
    }
}

initDB();