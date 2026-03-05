require('dotenv').config();
const express = require('express')
const listtingRouter = require('./routes/listing.routes')

const app = express();

app.use("/api/listings" , listtingRouter)

module.exports = app