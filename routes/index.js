var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

router.get('/register', function(req, res, next) {
    res.render('register', {title: 'Register'});
});

router.get('/chatroom', function(req, res, next) {
    res.render('chatroom', {title: 'Chatroom'});
});

module.exports = router;
