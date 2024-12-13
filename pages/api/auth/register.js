import bcrypt from 'bcryptjs';
import { sequelize } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      await sequelize.query(
        'INSERT INTO users (email, password) VALUES (?, ?)',
        { replacements: [email, hashedPassword] }
      );

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
