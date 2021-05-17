'use strict';
const mongoose = require('mongoose');

// mongoose.connect(' mongodb://127.0.0.1:27017/books',
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );
const BooksSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: String
});

module.export = BooksSchema;



