const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/users.route');   
const bodyParser = require('body-parser');

app.use(cors());

// parse the body
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

app.use(router);

// home route
app.get('/', (req,res) => {
  res.status(200).sendFile(__dirname+'/views/index.html')
});

// error handling route
app.use((req,res,next) => {
  res.status(404).json({
    message: '404! not found'
  });
});

// server error handling
app.get((err,req,res,next) => {
  res.status(500).json({
    message: 'Server error!'
  });
});

module.exports = app;