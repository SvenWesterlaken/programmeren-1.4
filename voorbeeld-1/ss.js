var http = require('http'),
    person = require('./person');

http.createServer( function(request, response) {
  response.writeHead(200, {
    'Content-Type' : 'application/json'
  });
  response.end( JSON.stringify(person.i18l('nl')));
}).listen(8000);




console.log('henk');
console.log('the magic starts at 8080')
