/*  
  File: books.js
  Name: Chihiro Hasegawa
  Student ID: 301229147
  Date: 2022 / 10 / 26
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  author: String,
  genre: String
},
  {
    collection: "books"
  });

module.exports = mongoose.model('Book', Book);
