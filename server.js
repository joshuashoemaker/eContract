'use strict'

//Dependencies
const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    path = require('path'),
    ejs = require('ejs'),
    app = express();

//Environment Configs
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Connect to Remote Database
if(mongoose.connect('mongodb://jshoemakerdev:Thenewera1@ds141697.mlab.com:41697/econtract')){
    console.log('Connected to Remote Database');
}
else{
    console.log("Could not connect to Remote Database");
}


//routes
app.get('/', (req, res, next) => {
    res.render('index');
});

app.use('/api', require('./routes/api'));



app.listen(port);
console.log('Server is on '+port);