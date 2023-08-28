import Link from 'next/link';

function Navigation() {
  return (
    <nav className="p-4">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Me</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
