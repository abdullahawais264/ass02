export default function handler(req, res) {
    const books = require('../../../public/data/books.json');
    const { id } = req.query;
  
    const filteredBooks = books.filter((b) => b.genreId === parseInt(id));
    res.status(200).json(filteredBooks);
  }
  