import Author from '../../../models/Author';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const authors = await Author.findAll();
    return res.status(200).json(authors);
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
