var express = require('express');
var app = express();

app.set('port', process.env.PORT || 8000);

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.get('/board', (req, res) => {
  res.send('Board입니다');
});

app.get('/login', (req, res) => {
  res.send('Login입니다');
});

app.get('/signup', (req, res) => {
  res.send('Signup입니다');
});

app.listen(app.get('port'));