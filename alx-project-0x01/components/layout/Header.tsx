import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex gap-6 items-center">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/posts" className="hover:underline">Posts</Link>
      <Link href="/users" className="hover:underline">Users</Link>
    </header>
  );
};

export default Header;
