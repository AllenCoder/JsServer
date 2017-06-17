var express = require('express');
var router = express.Router();

var path =require('path')

/* GET home page. */
router.all('/title', function(req, res, next) {

  console.log(req)
  // res.render('index', { title: 'Express' });
})
router.post('/test', function(req, res, next) {

    console.log(req)
    // res.sendfile('public/res/jcodds.xml');
    res.sendFile('jcodds.xml', { root: path.join(__dirname, '../public/res') });
    // res.render('index', { title: 'Express' });
})

module.exports = router;
