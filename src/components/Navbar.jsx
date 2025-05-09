import React,  {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
// tutorial didnt create this navlink variable and store this data in it
//  figure out why?
  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'Work', title: 'Work' },
    { id: 'contact', title: 'Contact' },
  ];


  return (
  <nav
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
  >
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
    <Link
      to="/"
      className="flex items-center gap-2"
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
      > 
      {
      /* remember to get the SVG Logo for the letter S to fit with your name and theme*/}
        <img src={logo} alt="logo" className="w-9 h-9 object-contain" loading="lazy" />
        <p className="text-white text-[18px] font-bold cursor-pointer">pencer<span className="sm:block hidden"> | Javascript Mastery</span></p> 
    </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
      {navLinks.map((Link) => (
        <li
          key={Link.id}
          className={`${
            active === Link.title
              ? "text-white"
              : "text-secondary"
          } hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive(Link.title)}
          >
          <a href={`#${Link.id}`}>{Link.title}</a>
        </li>
  ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar