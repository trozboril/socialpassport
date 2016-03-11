var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/linkedin', passport.authenticate('linkedin'));

router.get('/linkedin/callback', passport.authenticate('linkedin', {
  failureRedirect: '/'
}), function (req, res, next) {
	console.log('user:', req.user);	
  res.redirect('/');
});

router.get('/logout', function(req, res, next) {
  req.session = null;
  res.redirect('/');
});

module.exports = router;