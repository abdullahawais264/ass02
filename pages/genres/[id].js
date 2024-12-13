import Link from 'next/link';
import { useRouter } from 'next/router';
import booksData from '../../public/data/books.json';

const GenreDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Get the genre ID from the URL

  const genre = booksData.genres.find((genre) => genre.id === id);

  // Filter books by the selected genre
  const booksInGenre = booksData.books.filter((book) => book.genreId === id);

  if (!genre) {
    return <div>Loading...</div>; // Optionally, handle loading state
  }

  return (
    <div className="container">
      <h1>Genre: {genre.name}</h1>
      {booksInGenre.length > 0 ? (
        <div className="book-list">
          {booksInGenre.map((book) => (
            <div className="book-card" key={book.id}>
              <Link href={`/books/${book.id}`}>{book.title}</Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No books available for this genre.</p>
      )}
      <Link href="/genres">Back to Genres</Link>
    </div>
  );
};

export default GenreDetails;
