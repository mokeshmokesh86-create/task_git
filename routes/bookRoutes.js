const express = require('express');

const router = express.Router();

const {

  createBook,
  getBooks

} = require('../controller/bookcontroller');

const {

  authenticateToken

} = require('../utils/middleware');


// CREATE BOOK
router.post(
  '/book',
  authenticateToken,
  createBook
);

// GET BOOKS
router.get('/books', getBooks);

module.exports = router;