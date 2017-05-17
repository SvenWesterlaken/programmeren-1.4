var express = require('express'),
    router = express.Router(),
    path = require('path');

router.get('*', function(request, response) {
  response.status(200);
  response.json({
    "description": "Recipes REST server API version 1 is no longer supported. Please use API version 2."
  });
});

module.exports = router;
