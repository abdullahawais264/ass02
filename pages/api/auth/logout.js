export default function handler(req, res) {
  if (req.method === 'POST') {
    return res.status(200).json({ message: 'Logged out successfully' });
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
