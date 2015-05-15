var express = require('express');
var mongoose = require('mongoose');
var Message = require('../models/Message.js');
var testData = require('../test_data/testMessages.js');
var router = express.Router();

/* GET users listing. */
router.get('/viewAll', function(req, res, next) {
    var messages = testData;
    Message.find({}).sort("timestamp").exec(function(err, data) {
        if(err) {
            res.status(500);
            res.send(err);
        } else {
            res.render('partials/messages', {messages: data});
        }
    });
});

router.post('/sendMessage', function(req, res, next) {
    var text = req.body.message;
    var data = {
        username: req.session.username,
        text: text
    };
    Message.create(data, function(err, message) {
        if (err) {
            res.status(500);
            res.send(err);
        } else {
            res.status(200);
            res.send(message);
        }
    });
});

module.exports = router;