var express = require('express');
var router = express.Router();
let bodyParser = require('body-parser');
const request = require('request');







/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/about', (req, res) => {
  res.render('about')
})


router.get('/:username', (req, res) => {
  const {username} = req.params
  var options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request'
    }
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
        res.render('users', {username, info})

    }
  }
  request(options, callback);
})



module.exports = router;
