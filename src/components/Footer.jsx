import React from 'react'
import styles from '../style'
import { fb, ig } from '../static/img'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="bg-black w-full h-32 mt-10 relative">
      <div className="absolute top-0 left-[1%] w-[98%] h-1 mt-2 bg-white"></div>


      <div className="flex justify-evenly h-ful pt-3">
      
      <div className={`${styles.paragraphFooter} text-white flex items-top w-1/2 space-x-2 xs:space-x-20 mt-2 xs:mt-2 ml-2 xs:ml-10`}>
        
        <div className="">
        <p><b>Organizátor:</b><br />
        Viktor Martínek<br />
        nějaký@email.com<br />
        735 645 582</p>
        </div>
        <div className="">
        <p><b>Místo konání:</b><br />
        Letenské schody<br />
        Letná<br />
        170 00, Praha 7</p>
        </div>

      </div>

      {/* <div className="flex justify-center">
      <Link to="/home"><p className={`${styles.logoF} flex scale-100 hover:scale-105 select-none mt-2`}>VYBEH LETENSKYCH SCHODU</p></Link>
      </div> */}

      <div className="text-white flex items-center justify-evenly w-1/2">
        
        <img src={fb} alt="Facebook Icon" className={`${styles.footerImg}`}/>
        <img src={ig} alt="Instagram Icon" className={`${styles.footerImg}`}/>
      
      </div>

      </div>

      

      </div>
    </>
  )
}

export default Footer
