// c18 express
const express = require("express");
const app = express();

// colors
let colors = require("colors");

// c24-5) bodyParser
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

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

// c52)  method-override
let methodOverride = require('method-override')
app.use(methodOverride('_method'))
  
// 🍀c58-10)
// passport
const passport = require('passport');

// passport-local
const LocalStrategy = require('passport-local').Strategy;

// express-session
const session = require('express-session');

// middleware
app.use(session({ secret: 'ig123', resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());




app.get("/", function (req, res) {
    res.render('index.ejs',{meta_title:'miniProject'})  
});


app.listen(process.env.PORT || 8080, function () {
    console.log((`bgMagenta`).bgMagenta)
    console.log(`ig node server gogo, port: ${process.env.PORT}`.rainbow);    
});
