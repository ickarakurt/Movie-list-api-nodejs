const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('./models/Database.js');
const indexRouter = require('./routes/index');
const movieRouter = require('./routes/movielist');

const app = express();
const verifyToken = require('./middleware/verify-token');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/movie',verifyToken);
app.use('/movie',movieRouter);
app.use('/', indexRouter);


module.exports = app;
