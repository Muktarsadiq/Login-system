
const express = require("express");
const path = require('path');
const bodyparser = require('body-parser');
const session = require('express-session');
const { v4:uuidv4 } = require('uuid')

const router = require('./router');

const app = express();

const PORT =  1000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine', 'ejs');

//load static assets
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

app.use(session({
    secret: 'uuidv4()',//'1bd6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    resave: false,
    saveUninitialized: true
}))

app.use('/route', router);


// home route
app.get('/',(req, res) => {
    res.render('base');
})


app.listen(PORT, ()=> {console.log("listeninig to the server on http://localhost:1000")});