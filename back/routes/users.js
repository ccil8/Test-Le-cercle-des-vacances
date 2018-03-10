var express = require('express');
var router = express.Router();
const User = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Admin */
router.get('/admin', (req, res) => {
  res.render('admin', {
    user: req.admin.email,
    password: req.admin.password,
  });
});

module.exports = router;
