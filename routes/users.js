var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/profile', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
