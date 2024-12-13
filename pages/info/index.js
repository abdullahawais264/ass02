import Link from 'next/link';

export default function InfoIndexPage() {
  return (
    <div>
      <h1>Information</h1>
      <p>Select a section:</p>
      <ul>
        <li>
          <Link href="/info/faq">FAQs</Link>
        </li>
        <li>
          <Link href="/info/support">Support</Link>
        </li>
      </ul>
    </div>
  );
}
