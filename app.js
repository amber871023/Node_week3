var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

//router
var postsRouter = require('./routes/posts');
var usersRouter = require('./routes/users');

//express
var app = express();
require('./connections');

app.use(cors()); //header.js
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posts', postsRouter);
app.use('/users', usersRouter);

app.use((req,res) =>{
  res.status(404).send('找不到對應網址，請重新確認');
});

module.exports = app;
