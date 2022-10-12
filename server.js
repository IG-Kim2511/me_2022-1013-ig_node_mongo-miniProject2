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
app.set('layout', 'layouts/main_layout.ejs');

// c50) static
app.use(express.static('public'))
 
 


app.get("/", function (req, res) {
    res.render('index.ejs')  
});

app.get("/list", function (req, res) {
    res.render('list.ejs',{ig_posts:res});

    // // find().toArray()
    // db.collection('post').find().toArray(function (err,pp_res) {
    //   console.log((`list`).bgBlue)
    //   console.log(pp_res)
      
    //   // ejs
    //   //res.render
    //   res.render('list.ejs',{ig_posts:pp_res,  meta_title:'miniProject'});
    // })
});

app.get("/write", function (req, res) {
    res.render('write.ejs')
});



app.listen(process.env.PORT || 8080, function () {
    console.log((`bgMagenta`).bgMagenta)
    console.log(`ig node server gogo, port: ${process.env.PORT}`.rainbow);    
});
