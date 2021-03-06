var express = require('express'),
    router = express.Router(),
    path = require('path'),
    pool = require('../database/db');

router.get("/cities/:id?", function(req, res) {

  var id = req.params.id,
      query;

  if (id) {
    query = 'SELECT * FROM city WHERE ID = "' + id + '";';
  } else {
    query = 'SELECT * FROM city';
  }

  pool.getConnection( function(error, connection) {
    if (error) { throw error }
    connection.query(query, function (error, rows, fields) {
      connection.release();
      if(error) {
        throw error
      }
      res.status(200).json(rows);
    })
  });
});

router.get("/countries/:code?", function(req, res) {

  var code = req.params.code,
      query;

  if (code) {
    query = 'SELECT * FROM country WHERE Code = "' + code + '";';
  } else {
    query = 'SELECT * FROM country';
  }

  pool.getConnection( function(error, connection) {
    if (error) { throw error }
    connection.query(query, function (error, rows, fields) {
      connection.release();
      if(error) {
        throw error
      }
      res.status(200).json(rows);
    })
  });
});

router.post('/cities', function (req, res) {
  var city = req.body;

  pool.getConnection( function(error, connection) {
    if (error) { throw error }
    connection.query('INSERT INTO `city` SET ?', city, function (error, rows, fields) {
  	  if (error) {
        throw error;
      }
  	  res.end(JSON.stringify(rows));
  	});
  });
});

router.post('/countries', function (req, res) {
  var country = req.body;

  pool.getConnection( function(error, connection) {
    if (error) { throw error }
    connection.query('INSERT INTO `country` SET ?', country, function (error, rows, fields) {
  	  if (error) {
        throw error;
      }
  	  res.end(JSON.stringify(rows));
  	});
  });
});

router.put('/cities', function (req, res) {

  pool.getConnection( function(error, connection) {
    if (error) { throw error }
    connection.query('UPDATE `city` SET `Name`=?,`CountryCode`=?,`District`=?,`Population`=? where `ID`=?', [req.body.Name,req.body.CountryCode, req.body.District, req.body.Population, req.body.ID], function (error, rows, fields) {
  	  if (error) {
        throw error;
      }
  	  res.end(JSON.stringify(rows));
  	});
  });
});


router.delete('/cities', function (req, res) {

  pool.getConnection( function(error, connection) {
    if (error) { throw error }
    connection.query('DELETE FROM `city` WHERE `id`=?', [req.body.id], function (error, rows, fields) {
  	  if (error) {
        throw error;
      }
  	  res.end('Record has been deleted!');
  	});
  });
});

router.get("/search", function(req, res) {

  var type = req.query.type || '',
      cc = req.query.countrycode || '',
      limit = req.query.limit || 25,
      continent = req.query.continent || '',
      query;

  if (type) {
    query = 'SELECT * FROM ' + type + ' WHERE ';

    if(cc) {
      query = query + 'CountryCode = "' + cc + '"';
    }

    if(continent) {
      query = query + 'Continent = "' + continent + '"';
    }

    if(limit) {
      query = query + 'LIMIT ' + limit;
    }

  }

  query = query + ';';

  pool.getConnection( function(error, connection) {
    if (error) { throw error }
    connection.query(query, function (error, rows, fields) {
      connection.release();
      if(error) {
        throw error
      }
      res.status(200).json(rows);
    })
  });
});


router.get('*', function(request, response) {
  response.status(404);
  response.json({
    "description": "404 - Not found"
  });
});

module.exports = router;
