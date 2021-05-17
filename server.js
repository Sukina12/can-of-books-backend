'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');
const mongoose = require('mongoose');
const UserModel = require('./users.js');


const app = express();
app.use(cors());
const PORT = process.env.PORT || 8081;

mongoose.connect('mongodb://127.0.0.1:27017/books',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// app.get('/test', (request, response) => {

//   // TODO: 
//   // STEP 1: get the jwt from the headers
//   // STEP 2. use the jsonwebtoken library to verify that it is a valid jwt
//   // jsonwebtoken dock - https://www.npmjs.com/package/jsonwebtoken
//   // STEP 3: to prove that everything is working correctly, send the opened jwt back to the front-end
// })
app.get('/', homepage);
function homepage(req, res) {
  res.send('Hello From Sufian and Sukina');
}

app.get('/books', getBooksByUser);

function getBooksByUser(req, res) {
  const { email } = req.query;
  UserModel.find ( {email: email} , function (err, userData) {
    if (err) res.send('didnt work');
    res.send(userData);
  });
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
