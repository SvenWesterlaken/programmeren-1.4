var express = require('express'),
    router = express.Router(),
    pool = require('../database/dbConnector');

router.get('/actors/:lastname?', function(req, res, next) {
  var lastname = req.params.lastname,
      query_str;

  if (lastname) {
    query_str = 'SELECT * FROM actor_info WHERE last_name = "' + lastname + '";';
  } else {
    query_str = 'SELECT * FROM actor_info;';
  }

  pool.getConnection( function(err, connection) {
    if (err) { throw error }
    connection.query(query_str, function (err, rows, fields) {
      connection.release();
      if(err) { throw error }
      res.status(200).json(rows);
    })
  });

});


router.get('/help', function(req, res) {
  res.json({"msg": "Help functie"});
});

router.get('*', function(req, res) {
  res.json({"msg": "Thank you for use API version 2"});
});


module.exports = router;
