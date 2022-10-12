// c18 express
const express = require("express");
const app = express();

// colors
let colors = require("colors");

// dotenv
require('dotenv').config()

// c30) mogoClient
let MongoClient = require('mongodb').MongoClient;

// c32) ejs
// let ejs = require('ejs'); 
app.set('view engine','ejs')

// express-ejs-layouts
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

// c50) static
app.use(express.static('public'))




app.get("/", function (req, res) {
    res.render('index.ejs',{meta_title:'miniProject'})  
});


app.listen(process.env.PORT || 8080, function () {
    console.log((`bgMagenta`).bgMagenta)
    console.log(`ig node server gogo, port: ${process.env.PORT}`.rainbow);    
});
