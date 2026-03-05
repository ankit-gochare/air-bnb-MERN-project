require('dotenv').config();
const express = require('express')
const listtingRouter = require('./routes/listing.routes')
const path = require('path')

const app = express();

app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname, "views"));


app.use("/" , listtingRouter)

module.exports = app