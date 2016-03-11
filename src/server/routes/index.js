var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // var name = req.user.displayName || '';
  console.log(req.user);
  res.render('index', { title: 'Hello ', user: req.user});
});

module.exports = router;
