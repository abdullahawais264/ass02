export default function handler(req, res) {
    const authors = require('../../../public/data/authors.json');
    const books = require('../../../public/data/books.json');
    const { id } = req.query;
  
    const author = authors.find((a) => a.id === parseInt(id));
    if (author) {
      const authorBooks = books.filter((b) => b.authorId === parseInt(id));
      return res.status(200).json({ ...author, books: authorBooks });
    }
  
    return res.status(404).json({ message: 'Author not found' });
  }
  