import React from 'react'
import styles from '../style';
import { schody, slogan, slogan2, hdng } from '../static/img'
import { Link } from "react-scroll";



function Hero() {
  return (
    <>

    
    
    <div className="relative h-[90vh] max-w-[100%] rounded-b-lg overflow-hidden mt-6">

        
        <div className="relative xs:hidden w-[100%] h-full bg-left xs:bg-center bg-cover z-[-10] mt-0" style={{ backgroundImage: `url(${schody})`, backgroundPosition: '-7rem center'}}></div>
        <div className="hidden xs:block w-[100%] h-full bg-center bg-cover z-[-10] mt-0" style={{ backgroundImage: `url(${schody})` }}></div>
        
            
        <div className="absolute inset-0 hidden xs:flex flex-col items-centerjustify-top z-10">
          <div className="text-[1rem] xs:text-[3.5rem] ml-0 xs:ml-[35rem] mt-0 xs:mt-[8rem]">
            <h1 className={`${styles.nadpis} text-white`}>Najdi v sobě <span className="text-red-600">ROCKYHO!</span></h1>
          </div>
        </div>

        <div className="absolute inset-0 flex xs:hidden items-top mt-20 justify-center z-10">
          <div className="text-[2.5rem] xs:text-[3.5rem] ml-0 xs:ml-[35rem] mt-0 xs:mt-[8rem]">
            <h1 className={`${styles.nadpisMob} text-white`}>Najdi v sobě <span className="text-red-600">ROCKYHO!</span></h1>
          </div>
        </div>

        <div className="absolute inset-0 flex items-end justify-center z-10 pb-16 space-x-5 xs:space-x-10">

        <div className="">
            <Link to="concept" spy={true} smooth={true} offset={-112} duration={500}>
            <button className={`${styles.buttonshomeTXT} ${styles.buttonsHome} bg-red-500 shadow-2xl shadow-black hover:bg-red-600`}>
                Přihlásit se
            </button>
            </Link>
        </div>

        <div className="">
          <Link to="concept" spy={true} smooth={true} offset={-112} duration={500}>
          <button className={`${styles.buttonshomeTXT} ${styles.buttonsHome} bg-gray-200 hover:bg-gray-300`}>
                Dozvědět se více
          </button>
          </Link>
        </div>
        
        </div>
        
       
        {/* <div className="absolute inset-0 flex items-end justify-center z-10 mb-28">
        <div className="button w-40 h-16 bg-red-600 rounded-lg cursor-pointer select-none
                        active:translate-y-2 active:[box-shadow:0_0px_0_0_#f44336,0_0px_0_0_#f44336]
                        active:border-b-[0px]
                        transition-all duration-150 [box-shadow:0_10px_0_0_#f44336,0_15px_0_0_#f44336]
                        border-b-[1px] border-red-500">
		    <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">Přihlásit se</span>
	    </div>
      </div> */}

     
      

      </div>


    
      
    </>
  )
}

export default Hero