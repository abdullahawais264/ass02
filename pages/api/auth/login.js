import bcrypt from 'bcryptjs';
import { sequelize } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const [user] = await sequelize.query(
        'SELECT * FROM users WHERE email = ?',
        { replacements: [email], type: sequelize.QueryTypes.SELECT }
      );

      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Login successful
      res.status(200).json({ 
        message: 'Login successful', 
        email: user.email, 
        userId: user.id 
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
