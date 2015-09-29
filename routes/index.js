var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { url: '10.0.0.5' });
});

module.exports = router;
