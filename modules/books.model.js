'use strict';
const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: String
});

module.export = BooksSchema;



