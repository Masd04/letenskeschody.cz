import React from "react";
import {Link} from 'react-router-dom';
import styles from "../style"

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
    <div className="fixed left-0 right-0 top-0 h-10 shadow-md border-b-2 border-red-500 bg-blue-200 z-20 flex items-center justify-center">
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
            <li className="scale-100  hover:scale-110"><Link to="/" className="text-gray-400 hover:text-gray-100">Domů</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="/about" className="text-gray-400 hover:text-gray-100">Koncept</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="/docs" className="text-gray-400 hover:text-gray-100">Pravidla</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="/" className="text-gray-400 hover:text-gray-100">Tratě</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="/" className="text-gray-400 hover:text-gray-100">Kategorie</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="/" className="text-gray-400 hover:text-gray-100">Harmonogram</Link></li>
            <li className="scale-100  hover:scale-110"><Link to="/" className="text-gray-400 hover:text-gray-100">Kontakt</Link></li>
          </ul>
        </div>
        </div>
        
      </nav>
    </div>

    </>
  );
}

export default Navbar;
