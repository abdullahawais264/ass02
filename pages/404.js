import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go back to Home</Link>
    </div>
  );
};

export default Custom404;
