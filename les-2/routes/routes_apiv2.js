var express = require('express'),
    router = express.Router();


router.get('/help', function(req, res) {
  res.json({"msg": "Help functie"});
});

router.get('*', function(req, res) {
  res.json({"msg": "Thank you for use API version 2"});
});


module.exports = router;
