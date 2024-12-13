import Book from '../../../models/Book';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(book);
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
