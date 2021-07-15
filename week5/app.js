require('dotenv').config();
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var Boards = require('./boards');
var router = require('./router')(app, Boards)

app.listen(port, function() {
  console.log("Express server has started on port " + port)
});

mongoose.connect(process.env.MONGO_URI, {
  dbName: 'test',
  useNewUrlParser: true,
  useFindAndModify: false
});

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log("Connected to mongodb server");
});