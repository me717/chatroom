var express = require('express');
var mongoose = require('mongoose');
var User = require('../models/User.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/login', function(req, res, next) {
    //TODO login info
    var username = req.body.username;
    var password = req.body.password;
    var conditions = {
        username: username,
        password: password
    };
    User.findOne(conditions, "username", function(err, data) {
        if(err) {
            res.status(500);
            res.send(err);
        } else {
            res.status(200);
            res.send(data);
        }
    });
    // console.log("Logging in");
    // res.status(200);
    // res.send();
});

router.post('/register', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var data = {
        username: username,
        password: password
    };
    User.create(data, function(err, user) {
        if(err) {
            res.status(500);
            res.send(err);
        } else {
            res.status(200);
            res.send(user);
        }
    });
});

module.exports = router;