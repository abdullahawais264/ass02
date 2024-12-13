import Book from '../../../models/Book';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const books = await Book.findAll();
    return res.status(200).json(books);
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
