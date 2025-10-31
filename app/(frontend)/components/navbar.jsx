import Link from 'next/link';
// import './Navbar.css'; 
//import './global.css';

export default function Navbar() {
  return (
    <nav className="navbar bg-gray-50">
      {/* <Link href="/" className="logo">
        My Next.js App
      </Link> */}
      <div className="text-xl nav-links container justify-around space-x-6 ml-4 h-10">
        <Link className="hover:text-gray-400 font-bold" href="/">Home</Link>
        <Link className="hover:text-gray-400 font-bold" href="/about">About</Link>
        <Link className="hover:text-gray-400 font-bold" href="/more">More</Link>
      </div>
    </nav>
  );
}