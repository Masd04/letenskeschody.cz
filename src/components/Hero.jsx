import React from 'react'
import styles from '../style';
import { schody, slogan, slogan2 } from '../static/img'



function Hero() {
  return (
    <>

    
    
    <div className="relative h-[90vh] max-w-[100%] rounded-b-lg overflow-hidden mt-6">
        <div className="w-[100%] h-full bg-center bg-cover z-[-10] mt-0" style={{ backgroundImage: `url(${schody})` }}></div>
            
        <div className="absolute inset-0 flex flex-col items-center justify-top z-10">
          <div className="mr-[30rem] mt-16">
          <img className="w-[56rem] h-auto" src={slogan} alt="Slogan" />
          </div>

          <div className="ml-[30rem] mt-[-2rem]">
          <img className="w-[56rem] h-auto" src={slogan2} alt="Slogan" />
          </div>

        </div>

        <div className="absolute inset-0 flex items-end justify-center z-10 pb-16 space-x-10">
        <div className="">
            <button className={`${styles.heading3} bg-red-500 rounded-2xl px-5 py-2 hover:bg-red-300 hover:scale-105`}>
                Dozvědět se více
            </button>
        </div>
        <div className="">
            <button className={`${styles.heading3} bg-blue-400 rounded-2xl px-5 py-2 hover:bg-blue-200 hover:scale-105`}>
                Přihlásit se
            </button>
        </div>
        </div>
        

      </div>


    
      
    </>
  )
}

export default Hero
