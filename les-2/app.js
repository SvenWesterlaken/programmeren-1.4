var http = require('http'),
    express = require('express'),
    app = express(),
    config = require('./config.json'),
    port = process.env.PORT || config.webPort;

app.all('*', function(req, res, next){
  console.log(req.method + " " + req.url);
  next();
});

app.get('/api/v1/hello', function(req, res, next){
  res.contentType('application/json');
  res.json({"msg": "Hello to you all !! Have a nice NodeJS day."})
});

app.use('/apiv1', require('./routes/routes_apiv1'));
app.use('/apiv2', require('./routes/routes_apiv2'));

app.listen(port, function(){
  console.log('The magic happens at http://localhost:' + port);
});
