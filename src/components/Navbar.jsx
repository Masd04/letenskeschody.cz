import React from "react";
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
  return (
    <>
    <div className="fixed left-0 right-0 top-0 h-16 xs:h-20 shadow-md border-b-2 border-gray-700 bg-black z-20 flex items-center justify-center">
      <Link to="/home"><h3 className={`${styles.logoH} flex select-none mb-0 xs:mb-3`}>VYBEH LETENSKYCH SCHODU</h3></Link>
    </div>

    <div className="fixed left-0 right-0 top-16 h-20 shadow-md border-b-2 border-gray-100 bg-white z-20">
      <nav className="flex items-center justify-between mx-auto h-full">
        
      <Link to="home" spy={true} smooth={true} offset={-112} duration={500}>
        <img src={icon} alt="logo akce" className="w-[9.5rem] mt-3 scale-100 hover:scale-105 cursor-pointer"/>
      </Link>
        
        {/* <h1 className="ml-5 font-semibold uppercase text-lg text-gray-200">
          Výběh Letenských schodů
        </h1> */}
        <div className="flex w-[80%]">
        <div className="flex justify-end w-full">
          <ul className="hidden xs:flex items-center space-x-10 text-sm font-monserrat mr-10">
            <li className="scale-100  hover:scale-110"><Link to="home" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-112} duration={500} className="text-black hover:text-red-600 cursor-pointer">Domů</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="concept" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-130} duration={500} className="text-black hover:text-red-600 cursor-pointer">Koncept</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="rules" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-165} duration={500} className="text-black hover:text-red-600 cursor-pointer">Pravidla</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="runs" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-165} duration={500} className="text-black hover:text-red-600 cursor-pointer">Tratě</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="categories" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-150} duration={500} className="text-black hover:text-red-600 cursor-pointer">Kategorie</Link></li>
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
