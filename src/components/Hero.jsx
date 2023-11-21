import React from 'react'
import styles from '../style';
import { schody, slogan, slogan2, hdng } from '../static/img'



function Hero() {
  return (
    <>

    
    
    <div className="relative h-[90vh] max-w-[100%] rounded-b-lg overflow-hidden mt-6">
        <div className="w-[100%] h-full bg-center bg-cover z-[-10] mt-0" style={{ backgroundImage: `url(${schody})` }}></div>
            
        <div className="absolute inset-0 flex flex-col items-center justify-top z-10">
          {/* <div className="mr-[0rem] mt-0">
          <img className="w-[1080px] h-auto" src={hdng} alt="Slogan" />
          </div> */}

          <div className="ml-[40rem] mt-[6rem]">
          <img className="w-[45rem] h-auto" src={slogan2} alt="Slogan" />
          </div>

        </div>

        <div className="absolute inset-0 flex items-end justify-center z-10 pb-16 space-x-10">
        <div className="">
            <button className={`${styles.heading3} bg-gray-200 rounded-2xl px-5 py-2 hover:bg-gray-300 hover:scale-105`}>
                Dozvědět se více
            </button>
        </div>
        <div className="">
            <button className={`${styles.heading3} bg-red-500 shadow-2xl shadow-black rounded-2xl px-5 py-2 hover:bg-red-600 hover:scale-105`}>
                Přihlásit se
            </button>
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
