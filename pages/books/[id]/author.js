import Link from 'next/link';
import { useRouter } from 'next/router';
import booksData from '../../../public/data/books.json';

const AuthorDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Get the book ID from the URL

  const book = booksData.books.find((book) => book.id === id);
  const author = booksData.authors.find((author) => author.id === book.authorId);

  if (!author) {
    return <div>Loading...</div>; // Optionally, handle loading state
  }

  return (
    <div className="container">
      <h1>Author: {author.name}</h1>
      <p>Biography: {author.biography}</p>
      <Link href={`/books/${id}`}>Back to Book Details</Link>
    </div>
  );
};

export default AuthorDetails;
