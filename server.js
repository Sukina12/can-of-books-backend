'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8081;

mongoose.connect('mongodb://localhost/test',
  {useNewUrlParser: true, useUnifiedTopology: true});



// app.get('/test', (request, response) => {

//   // TODO: 
//   // STEP 1: get the jwt from the headers
//   // STEP 2. use the jsonwebtoken library to verify that it is a valid jwt
//   // jsonwebtoken dock - https://www.npmjs.com/package/jsonwebtoken
//   // STEP 3: to prove that everything is working correctly, send the opened jwt back to the front-end
// })
app.get ('/', homepage);
function homepage (req,res){
  res.send('Hello From Sufian and Sukina');
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
