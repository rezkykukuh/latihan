import Image from 'next/image';
import Link from 'next/link';

const navbar = () => {
  return (
    <nav className="header">
      <div className="logo">
      <h1>OurShoes</h1>
      </div>
      <div className="menu">
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/brands/"><a>Brand Listing</a></Link>
      
      </div>
    </nav>
);
}
 
export default navbar;