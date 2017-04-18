/**
 * Created by Sven on 18-4-2017.
 */
var express = require("express"),
    app = express(),
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

app.all('*', function(request, response) {
    response.status(404);
    response.send('404 - Not Found');
})

app.listen(port, function() {
  console.log('Server app is listening on port ' + port);
})
