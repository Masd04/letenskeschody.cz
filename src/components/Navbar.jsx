import React from "react";
import styles from "../style"
import { Link } from "react-scroll";

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
    <div className="fixed left-0 right-0 top-0 h-10 shadow-md border-b-2 border-red-500 bg-red-300 z-20 flex items-center justify-center">
      <p className="flex">SPONZOŘI + SOCKY</p>
    </div>

    <div className="fixed left-0 right-0 top-10 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900 z-20">
      <nav className="flex items-center mx-auto h-full">
        <h1 className="ml-5 font-semibold uppercase text-lg text-gray-200">
          Výběh Letenských schodů
        </h1>
        <div className="flex w-[80%]">
        <div className="flex justify-end w-full">
          <ul className="flex items-center space-x-10 text-sm font-monserrat mr-0">
            <li className="scale-100  hover:scale-110"><Link to="home" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-112} duration={500} className="text-gray-400 hover:text-gray-100">Domů</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="concept" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-112} duration={500} className="text-gray-400 hover:text-gray-100">Koncept</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="rules" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-112} duration={500} className="text-gray-400 hover:text-gray-100">Pravidla</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="runs" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-112} duration={500} className="text-gray-400 hover:text-gray-100">Tratě</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="categories" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-112} duration={500} className="text-gray-400 hover:text-gray-100">Kategorie</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="/" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-112} duration={500} className="text-gray-400 hover:text-gray-100">Harmonogram</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="/" activeClass={`${styles.active}`} spy={true} smooth={true} offset={-112} duration={500} className="text-gray-400 hover:text-gray-100">Kontakt</Link></li>
          </ul>
        </div>
        </div>
        
      </nav>
    </div>

    </>
  );
}

export default Navbar;
