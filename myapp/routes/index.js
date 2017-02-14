var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/page1', function(req, res, next) {
  res.send("Page1");
});
router.get('/page2', function(req, res, next) {
   res.send("Page2");
});

module.exports = router;
