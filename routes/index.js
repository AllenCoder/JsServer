var express = require('express');
var router = express.Router();

var path = require('path')

/* GET home page. */
router.all('/title', function (req, res, next) {

    console.log(req)
    // res.render('index', { title: 'Express' });
})
router.get('/api/users', function (req, res) {
    var user_id = req.param('id');
    var token = req.param('token');
    var geo = req.param('geo');

    res.send(user_id + ' ' + token + ' ' + geo);
});
router.param('name', function (req, res, next, name) {

    // check if the user with that name exists
    // do some validations
    // add -dude to the name
    var modified = name + '-dude';

    // save name to the request
    req.name = modified;

    next();
});

// http://localhost:8080/api/users/chris
router.get('/api/users/:name', function (req, res) {
    // the user was found and is available in req.user
    res.send('What is up ' + req.name + '!');
});
router.all('/test', function (req, res, next) {

    console.log(req)

    res.set({
        'Content-Length': '123',
    })


    res.sendFile('JsServertest.json', {root: path.join(__dirname, '../public/res')});
    // res.render('index', { title: 'Express' });
})

router.all('/api/users', function (req, res) {
    console.log(req)
    var user_id = req.body.gid;
    var token = req.body.osversion;
    console.log(user_id)
    console.log(token)
    res.sendFile('jcodds.xml', {root: path.join(__dirname, '../public/res')});

});


router.all('/trade/go', function (req, res) {
    console.log(req.headers)

    /*
    HTTP/1.1 200 OK
     Server	nginx
     Date	Mon, 19 Jun 2017 02:35:26 GMT
     Cache-Control	no-store
     Content-Type	text/xml;charset=UTF-8
     Content-Encoding	gzip
     Vary	Accept-Encoding
     Pragma	no-cache
     Set-Cookie	JSESSIONID=43E6672555D36EAB234DB20C53828DD0; Path=/; HttpOnly
     THE-TIME	Monday, 19-Jun-2017 10:35:27 CST
     Transfer-Encoding	chunked
     Proxy-Connection	Keep-alive
     */
    var date= new Date()
    res.set({
        'Content-Type': 'text/json;charset=UTF-8',
        'Content-Length': '123',
        'Date': date.toDateString()
    })
    res.sendFile('JsServertest.json', {root: path.join(__dirname, '../public/res')});

});
module.exports = router;
