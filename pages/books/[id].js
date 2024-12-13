import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function BookDetails() {
  const [book, setBook] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchBook = async () => {
        const res = await fetch(`/api/books/${id}`);
        const data = await res.json();
        setBook(data);
      };

      fetchBook();
    }
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <ProtectedRoute>
      <div>
        <h1>{book.title}</h1>
        <p>Author ID: {book.authorId}</p>
        <p>Genre ID: {book.genreId}</p>
      </div>
    </ProtectedRoute>
  );
}
