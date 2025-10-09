import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">ResolveAI</Link>
      <div className="links">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
