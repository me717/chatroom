var express = require('express');
var mongoose = require('mongoose');
var User = require('../models/User.js');
var testData = require('../test_data/testMessages.js');
var router = express.Router();

/* GET users listing. */
router.get('/viewAll', function(req, res, next) {
    var messages = testData;
    //TODO Get nontest data
    res.render('partials/messages', {messages: messages});
});

module.exports = router;