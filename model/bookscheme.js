const mongoose = require('mongoose');

const bookschema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },

  price: {
    type: Number,
    required: true
  }

});

const Book = mongoose.model('Book', bookschema);

module.exports = Book;