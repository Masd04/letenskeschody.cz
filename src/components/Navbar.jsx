import React, { useState, useEffect } from "react";
import styles from "../style"
import { Link } from "react-scroll";
import { icon } from '../static/img'

function Button({text, bg, padding}) {
  return (
    <div>
      <button
        className={`
          ${padding || 'px-6 py-2'} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}


function Navbar() {

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      // Assuming you have a way to determine the current section,
      // for example, using the window scroll position.
      const currentSection = determineCurrentSection();
      setActiveSection(currentSection);
    };
  
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const determineCurrentSection = () => {
    const sections = ['home', 'concept', 'rules', 'runs', 'categories'];
    const currentScrollPos = window.scrollY + window.innerHeight / 2; // Adjust this if necessary
  
    for (const sectionId of sections) {
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) {
        const sectionTop = sectionEl.offsetTop;
        const sectionHeight = sectionEl.offsetHeight;
        if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
          return sectionId;
        }
      }
    }
    return ''; // Default if no section is active
  };

  const handleLinkClick = (sectionId) => {
    setTimeout(() => {
      setActiveSection(determineCurrentSection());
    }, 500); // Delay may need adjustment
  };

  const debounce = (func, delay) => {
    let inDebounce;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };
  
  useEffect(() => {
    const debouncedHandleScroll = debounce(() => {
      setActiveSection(determineCurrentSection());
    }, 100);
  
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, []);

  
  return (
    <>
    <div className="fixed left-0 right-0 top-0 h-16 xs:h-20 shadow-md border-b-2 border-gray-700 bg-black z-20 flex items-center justify-center">
      <Link to="/home"><h3 className={`${styles.logoH} flex select-none mb-0 xs:mb-3`}>VYBEH LETENSKYCH SCHODU</h3></Link>
    </div>

    <div className="fixed left-0 right-0 top-16 h-20 shadow-md border-b-2 border-gray-100 bg-white z-20">
      <nav className="flex items-center justify-between mx-auto h-full select-none">
        
      <Link to="home" spy={true} smooth={true} offset={-112} duration={500}>
        <img src={icon} alt="logo akce" className="w-[9.5rem] mt-3 scale-100 hover:scale-105 cursor-pointer"/>
      </Link>
        
        
        <div className="flex w-[80%]">
        <div className="flex justify-end w-full">
          <ul className="hidden xs:flex items-center space-x-10 text-sm font-monserrat font-bold mr-10">
            <li className={`scale-100 hover:scale-110 ${activeSection === 'home' ? styles.active : ''}`}><Link to="home" onClick={() => handleLinkClick('home')} spy={true} smooth={true} offset={-112} duration={500} className="text-black hover:text-red-600 cursor-pointer">Domů</Link></li>
            <li className={`scale-100 hover:scale-110 ${activeSection === 'concept' ? styles.active : ''}`}><Link to="concept" onClick={() => handleLinkClick('concept')} spy={true} smooth={true} offset={-130} duration={500} className="text-black hover:text-red-600 cursor-pointer">Koncept</Link></li>
            <li className={`scale-100 hover:scale-110 ${activeSection === 'rules' ? styles.active : ''}`}><Link to="rules" onClick={() => handleLinkClick('rules')} spy={true} smooth={true} offset={-165} duration={500} className="text-black hover:text-red-600 cursor-pointer">Pravidla</Link></li>
            <li className={`scale-100 hover:scale-110 ${activeSection === 'runs' ? styles.active : ''}`}><Link to="runs" onClick={() => handleLinkClick('runs')} spy={true} smooth={true} offset={-165} duration={500} className="text-black hover:text-red-600 cursor-pointer">Tratě</Link></li>
            <li className={`scale-100 hover:scale-110 ${activeSection === 'categories' ? styles.active : ''}`}><Link to="categories" onClick={() => handleLinkClick('categories')} spy={true} smooth={true} offset={-150} duration={500} className="text-black hover:text-red-600 cursor-pointer">Kategorie</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="/" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-112} duration={500} className="text-black hover:text-red-600 cursor-pointer">Harmonogram</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="/" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-112} duration={500} className="text-black hover:text-red-600 cursor-pointer">Kontakt</Link></li>
          </ul>
        </div>
        </div>
        
      </nav>
    </div>

    </>
  );
}

export default Navbar;
