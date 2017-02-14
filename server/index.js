var express = require('express') 
  , bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());    

// Definir a route principal
app.get('/', function(req, res) {
  res.send('Welcome to API');
});

// Lista de Utilizadores
var message = 'You are not expected to understand this.';

// Definir um endpoint de get da API
app.get('/copy/get_message', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.send(message);
})

// Definir um endpoint de post da API
app.post('/copy/send_message', function(req, res, next) {
  message = req.body.message;
  console.log(req.body.message);
  res.setHeader('Access-Control-Allow-Origin','*');
  res.send(JSON.stringify(req.body.message));
})


// Aplicação disponível em http://127.0.0.1:9000/
app.listen(9000);