const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//Routes
const usersRouter = require('./routes/users.router');
const indexRouter = require('./routes/index.router');

const app = express();

// //Set the templates motor
// app.set('view engine', 'pug'); //Set the view engine

//Set the public folder for static files (js,css,img)
app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//Initializer  of the routes
app.use('/', indexRouter);
app.use('/users',usersRouter);


//Allow initializer the server
app.listen(3000,()=>{
    console.log("Running in port 3000")
});