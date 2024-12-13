import Link from 'next/link';
import { useRouter } from 'next/router';

const InfoPage = () => {
  const router = useRouter();
  const { slug } = router.query; // Extract the slug from the URL

  // If the slug is undefined (i.e., the user is on /info), display the default info page
  if (!slug) {
    return (
      <div className="container">
        <h1>Information</h1>
        <p>Welcome to the Information section. Here you can find FAQs, support, and other resources.</p>
        <ul>
          <li>
            <Link href="/info/faqs">FAQs</Link>
          </li>
          <li>
            <Link href="/info/support">Support</Link>
          </li>
        </ul>
      </div>
    );
  }

  // Join the slug array to display the requested info page based on the slug
  const page = slug.join('/');

  // Add custom content for different paths like /info/faqs, /info/support, etc.
  let content;
  switch (page) {
    case 'faqs':
      content = (
        <div>
          <h1>FAQs</h1>
          <p>Here are some frequently asked questions...</p>
        </div>
      );
      break;
    case 'support':
      content = (
        <div>
          <h1>Support</h1>
          <p>Need help? Contact our support team...</p>
        </div>
      );
      break;
    default:
      content = (
        <div>
          <h1>{page}</h1>
          <p>This is the {page} page under the Info section.</p>
        </div>
      );
      break;
  }

  return (
    <div className="container">
      {content}
      <Link href="/info">Back to Information</Link>
    </div>
  );
};

export default InfoPage;
