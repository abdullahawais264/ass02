import SearchHistory from '../../../models/SearchHistory';

export default async function handler(req, res) {
  const userId = 1; // Mock user ID for simplicity

  if (req.method === 'GET') {
    const history = await SearchHistory.findAll({ where: { userId } });
    return res.status(200).json(history);
  }

  if (req.method === 'POST') {
    const { query } = req.body;
    await SearchHistory.create({ userId, query });
    return res.status(201).json({ message: 'Search history updated' });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
