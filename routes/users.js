var express = require('express');
var router = express.Router();

/* GET users listing. */
router.all('/', function(req, res, next) {
  // console.log(req.param('key'))
  res.sendFile('jcodds.xml',{"root": __dirname})
});

module.exports = router;
