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
});

router.post('/register', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var data = {
        username: username, 
        password: password
    };
    User.findOne({username:username}, function(err, data) {
        if(err) {
            res.status(500);
            res.send(err);           
        } else if (data) {
            res.status(200);
            res.send();
        } else{
            User.create(data, function(err, user) {
                if(err) {
                    res.status(500);
                    res.send(err);
                } else {
                    res.status(200);
                res.send(user);
            }
            });
        }
    });
});

module.exports = router;