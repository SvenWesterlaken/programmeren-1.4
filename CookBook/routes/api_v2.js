var express = require('express'),
    router = express.Router(),
    path = require('path'),
    recipes = require('../recipes.js');

router.get('/info', function(request, response) {
  response.status(200);
  response.json({
    "info": "This API is meant for recipes, copied from WikiBooks CookBook."
  });
});

router.get('/recipes', function(request, response) {
  var category = request.query.category || '',
      recipe = recipes.filter(function(l) {
        return  (l.category == category);
      });

  response.status(200);

  if(category != '') {
    response.json(recipe);
  } else {
    response.json(recipes);
  }

});

router.get('/recipes/:number', function(request, response) {
  var number = request.params.number || '',
      recipe = recipes[number];

  response.status(200);
  response.json(recipe);
});

router.get('*', function(request, response) {
  response.status(404);
  response.json({
    "not-found": "Page could not be found. Sorry."
  });
});

module.exports = router;
