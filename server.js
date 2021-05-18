'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');
const mongoose = require('mongoose');
const UserModel = require('./modules/users.js');


const app = express();
app.use(cors());
app.use(express.json());
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

app.post('/books', createBooks);

function getBooksByUser(req, res) {
  const { email } = req.query;
  UserModel.find({ email: email }, function (err, userData) {
    if (err) res.send('didnt work');
    res.send(userData);
  });
}

function createBooks(request, response) {
  console.log(request.body);
  const { email, bookName, bookDescription, bookStatus } = request.body;
  UserModel.find({ email: email }, (error, userData) => {
    console.log(userData);
    userData[0].books.push({
      name: bookName,
      description: bookDescription,
      status: bookStatus
    });
    userData[0].save();
    response.send(userData);
  });
}

app.delete('/books/:index', deleteBooksForEmail);

function deleteBooksForEmail(req, res) {

  const index = Number(req.params.index);
  console.log(req.params);

  const { email } = req.query;
  console.log(email);
  UserModel.find({ email: email }, (err, userData) => {

    const newBooksArr = userData[0].books.filter((user, idx) => {
      return idx !== index;
    });
    userData[0].books = newBooksArr;
    userData[0].save();

    res.send(' Book deleted!');
  });
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
