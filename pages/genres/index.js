import Link from 'next/link';
import booksData from '../../public/data/books.json';

const GenresPage = () => {
  const genres = booksData.genres;

  return (
    <div className="container">
      <h1>Book Genres</h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <Link href={`/genres/${genre.id}`}>{genre.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenresPage;
