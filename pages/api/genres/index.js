import Genre from '../../../models/Genre';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const genres = await Genre.findAll();
    return res.status(200).json(genres);
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
