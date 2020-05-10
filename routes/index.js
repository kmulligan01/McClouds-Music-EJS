var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});


router.get('/services', function(req, res, next) {
  res.render('services', {page:'Services', menuId:'services'});
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', {page:'Portfolio', menuId:'portfolio'});
});

router.get('/calendar', function(req, res, next) {
  res.render('calendar', {page:'Portfolio', menuId:'calendar'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Us', menuId:'contact'});
});

module.exports = router;