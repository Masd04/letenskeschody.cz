import React, { useState, useEffect } from "react";
import styles from "../style"
import { Link } from "react-scroll";
import { icon, menu, close } from '../static/img'




function Navbar() {

  const [activeSection, setActiveSection] = useState('');

    //  ACTIVE LINKS AND SCROLL
  const handleLinkClick = () => {
    setTimeout(() => {
      setActiveSection(determineCurrentSection());
    }, 500); // Delay may need adjustment
  };

  const determineCurrentSection = () => {
    const sections = ['home', 'concept', 'rules', 'runs', 'categories'];
    const currentScrollPos = window.scrollY + window.innerHeight / 2;
  
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
  
    const onScroll = () => {
      debouncedHandleScroll();
    };
  
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  //  MOBILE NAVBAR
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!navRef.current.contains(event.target)) {
        if (!toggle) return;
        setToggle(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
    }, [toggle]);

    const handleClick = (e) => {
    e.stopPropagation();
    setToggle((prev) => !prev);
    }

    const handleNavLinkClick = () => {
    setToggle(false);
    }

    const navLinks = [
      {path: "home", text: "Domů", offset: -112 },
      {path: "concept", text: "Koncept", offset: -160 },
      {path: "rules", text: "Pravidla", offset: -165 },
      {path: "runs", text: "Tratě", offset: -165 },
      {path: "categories", text: "Kategorie", offset: -150 },
      {path: "/", text: "Harmonogram", offset: -112 },
      {path: "/", text: "Kontakt", offset: -112 },
    ];

  
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
            
          {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`scale-100 hover:scale-110 ${
                      activeSection === link.path ? styles.active : ''
                    }`}
                  >
                    <Link
                      to={link.path}
                      onClick={() => handleLinkClick(link.path)}
                      spy={true}
                      smooth={true}
                      offset={link.offset}
                      duration={500}
                      className="text-black hover:text-red-600 cursor-pointer"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>

        </div>
        </div>


            {/* MOBILE NAVBAR */}
        <div className="flex sm:hidden flex-1 items-center justify-end w-12 h-12">  
            <img src={toggle ? close : menu} alt="MenuButton" className="w-[2rem] h-[2rem] object-contain mr-5"
            onClick={handleClick} />

            <div className={`${toggle ? 'flex' : 'hidden'}
              pl-8 pb-5 pt-2 bg-white absolute top-[50px] right-[-16px] xs:top-[34px] xs:right-[-15px] mx-4 my-7 min-w[140px] rounded-md`}>
              
              <ul className="flex xs:hidden flex-col items-center text-base font-monserrat font-bold mr-10 space-y-4">
            
                {navLinks.map((link, index) => (
                    <li
                      key={index}
                      className={`scale-100 hover:scale-110 ${
                        activeSection === link.path ? styles.active : ''
                      }`}
                    >
                      <Link
                        to={link.path}
                        onClick={() => handleLinkClick(link.path)}
                        spy={true}
                        smooth={true}
                        offset={link.offset}
                        duration={500}
                        className="text-black hover:text-red-600 cursor-pointer"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
            </ul>
            
          </div>

        </div>


      </nav>

    </div>

    </>
  );
}

export default Navbar;
