'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const indexController = require ('./controller/index.controller');
const booksController = require ('./controller/books.controller');


const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8081;

mongoose.connect('mongodb://127.0.0.1:27017/books',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get('/',indexController.homepage);


// get data from specific email
app.get('/books', booksController.getBooksByUser);



// add new books to mongo
app.post('/books',booksController.createBooks);


// delete data from mongo
app.delete('/books/:index',booksController.deleteBooksForEmail);



// update data in mongo
app.put('/books/:index',booksController.updateBooksData);



// listen to port
app.listen(PORT, () => console.log(`listening on ${PORT}`));
