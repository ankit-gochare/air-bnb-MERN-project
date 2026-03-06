require('dotenv').config();
const express = require('express')
const listtingRouter = require('./routes/listing.routes')
const path = require('path')

const methodOverride = require('method-override')

const app = express();

app.use(methodOverride("_method"));
app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname, "views"));

app.use(express.urlencoded({extended:true}));


app.use("/" , listtingRouter)

module.exports = app