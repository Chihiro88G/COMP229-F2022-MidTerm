/*  
  File: index.js
  Name: Chihiro Hasegawa
  Student ID: 301229147
  Date: 2022 / 10 / 26
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
  });
});

module.exports = router;
