/**
 * Created by Sven on 18-4-2017.
 */
var express = require("express"),
    app = express(),
    users = require('./users'),
    port = process.env.PORT || 3000;

app.get('/', function(request, response){
    response.send('Hello Avans!');
})

app.get('/about', function(request, response) {
    response.send('Written by Sven Westerlaken');
})

app.post('/', function(request, response) {
    response.send('Hello Avans, POST request recieved');
})

app.put('/', function(request, response) {
    response.send('Hello Avans, PUT request recieved');
})

app.get('/json', function(request, response) {
  response.json(
    {
      'some_name':'Value',
      'an_array_of_objects' : [
        {
          'another_name': 'Another value',
          'a_further_name': "A further value"
        },
        {
          'yet_another_name': 'Yet another value'
        }
      ],
      'some_boolean': true,
      'some_integer': 42,
      'array_of_ints': [
        2, 3, 5, 7, 11, 13
      ],
      'array_of_strings': [
        "twee", "drie", "vijf", "zeven"
      ]
    })
})

app.get('/api' function(request, response) {
  response.json(JSON.stringify(person.i18l('nl')));
})

app.all('*', function(request, response) {
    response.status(404);
    response.send('404 - Not Found');
})

app.listen(port, function() {
  console.log('Server app is listening on port ' + port);
})
