var express = require('express');
var router = express.Router();

var path =require('path')

/* GET home page. */
router.all('/title', function(req, res, next) {

  console.log(req)
  // res.render('index', { title: 'Express' });
})
router.get('/api/users', function(req, res) {
    var user_id = req.param('id');
    var token = req.param('token');
    var geo = req.param('geo');

    res.send(user_id + ' ' + token + ' ' + geo);
});
router.param('name', function(req, res, next, name) {

    // check if the user with that name exists
    // do some validations
    // add -dude to the name
    var modified = name + '-dude';

    // save name to the request
    req.name = modified;

    next();
});

// http://localhost:8080/api/users/chris
router.get('/api/users/:name', function(req, res) {
    // the user was found and is available in req.user
    res.send('What is up ' + req.name + '!');
});
router.post('/test', function(req, res, next) {

    console.log(req)
    // res.sendfile('public/res/jcodds.xml');
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;

    console.error(user_id)
    console.error(token)

    console.error(geo)


    res.sendFile('jcodds.xml', { root: path.join(__dirname, '../public/res') });
    // res.render('index', { title: 'Express' });
})

router.post('/api/users', function(req, res) {
    console.log(req)
    var user_id = req.body.gid;
    var token = req.body.osversion;
    console.log(user_id)
    console.log(token)
    res.sendFile('jcodds.xml', { root: path.join(__dirname, '../public/res') });

});

module.exports = router;
