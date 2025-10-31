import Link from 'next/link';
// import './Navbar.css'; 
//import './global.css';

export default function Navbar() {
  return (
    <nav className="navbar bg-gray-50">
      {/* <Link href="/" className="logo">
        My Next.js App
      </Link> */}
      <div className="nav-links container justify-around space-x-6 ml-4 h-10">
        <Link className="hover:text-gray-500" href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
      </div>
    </nav>
  );
}