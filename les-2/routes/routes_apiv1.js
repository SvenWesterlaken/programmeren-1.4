var express = require('express'),
    router = express.Router(),
    path = require('path');

router.get('*', function(req, res) {
  res.status(200);
  res.json({
    "description": "Project X API version 1. Please use API version."
  });
});

module.exports = router;
