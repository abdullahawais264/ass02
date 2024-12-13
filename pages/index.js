import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Welcome to BookStore</h1>
      {user ? (
        <>
          <p>Logged in as: {user.email}</p>
          <button onClick={logout}>Logout</button>
          <nav>
            <Link href="/books">View Books</Link>
          </nav>
        </>
      ) : (
        <nav>
          <Link href="/login">Login</Link>
        </nav>
      )}
    </div>
  );
}
