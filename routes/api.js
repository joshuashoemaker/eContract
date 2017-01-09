//Dependencies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Models
var Contract = require(__dirname + '/../models/contracts');

router.get('/', (req, res)=>{

});

router.post('/saveContract', (req, res)=>{
    var contract = new Contract(req.body.data)

    contract.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Saved Contract');
        }
    });

});

module.exports = router;