import Link from 'next/link';
import useSWR from 'swr';
import booksData from '../public/data/books.json';

const fetcher = (url) => booksData.authors;

export default function AuthorsPage() {
  const { data: authors } = useSWR('/api/authors', fetcher);

  return (
    <div className="container">
      <h1>Authors</h1>
      <ul>
        {authors?.map((author) => (
          <li key={author.id}>
            <Link href={`/authors/${author.id}`}>
              <a>{author.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
