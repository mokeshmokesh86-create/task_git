const Book = require('../model/bookscheme');


// CREATE BOOK
exports.createBook = async (req, res) => {

  try {

    const book = new Book({

      title: req.body.title,

      // TOKEN ID
      author: req.user.id,

      price: req.body.price

    });

    await book.save();

    res.status(201).json({

      message: 'Book Created Successfully',
      book

    });

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }

};


// GET BOOKS
exports.getBooks = async (req, res) => {

  try {

    const books = await Book.find()
      .populate('author', 'name email');

    res.status(200).json(books);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};