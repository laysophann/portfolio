import Link from 'next/link';

function Navigation() {
  return (
    <nav className="flex justify-between items-center p-4">
      <h1 className='font-bold text-5xl text-lime-500'>.SP.</h1>
      <ul className="flex space-x-5">
        <li><Link href="">Home</Link></li>
        <li><Link href="#about">About Me</Link></li>
        <li><Link href="#skills">Skills</Link></li>
        <li><Link href="#contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
