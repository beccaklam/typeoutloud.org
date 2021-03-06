require('habitat').load();

var express = require('express');
var app = express();
var routes = require('./routes');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/api/sheets/add/:channel', routes.sheets.add);
app.get('/api/sheets/read/:channel', routes.sheets.read);

app.use(express.static('public'));

app.listen(process.env.PORT, function () {
  console.log('Running server at: ' + process.env.PORT + '!');
});
