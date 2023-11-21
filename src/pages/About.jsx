import React from 'react'
import styles from '../style';
import { schody, slogan, slogan2, hdng } from '../static/img'
import {Countdown} from '../components';
import { icon } from '../static/img'



const smallScreenStyle = window.innerWidth < 480 ? { backgroundSize: '110%' } : {};

function About() {
  return (
    <>
    <div className="fixed left-0 right-0 top-0 h-16 xs:h-20 shadow-md border-b-2 border-gray-700 bg-black z-20 flex items-center justify-center">
      <a href='/'><p className="flex text-white text-xl xs:text-4xl font-sports scale-100 hover:scale-110">VYBEH LETENSKYCH SCHODU.CZ</p></a>
    </div>
    
    
    <div className="relative h-[90vh] max-w-[100%] rounded-b-lg overflow-hidden mt-0">
        <div className="relative xs:hidden w-[100%] h-full bg-left xs:bg-center bg-cover z-[-10] mt-0" style={{ backgroundImage: `url(${schody})`, backgroundPosition: '-7rem center'}}></div>
        <div className="hidden xs:block w-[100%] h-full bg-left xs:bg-center bg-cover z-[-10] mt-0" style={{ backgroundImage: `url(${schody})`}}></div>
            
        <div className="absolute inset-0 flex flex-col items-center justify-top z-10">
          {/* <div className="mr-[0rem] mt-0">
          <img className="w-[1080px] h-auto" src={hdng} alt="Slogan" />
          </div> */}

          {/* <div className="ml-[40rem] mt-[6rem]">
          <img className="w-[45rem] h-auto" src={slogan2} alt="Slogan" />
          </div> */}
          <div className="mt-6">
          <h1 className={`font-monserrat font-semibold xs:text-[68px] text-[40px] text-red-600 xs:leading-[76.8px] leading-[66.8px] w-full text-center select-nonemb-[-1.5rem]`}>KVĚTEN 2024</h1>
          <Countdown />
          </div>

          
          <div className="hidden xs:absolute left-0">
            <img src={icon} alt="logo akce" className="w-[18rem] mt-0"/>
          </div>
          <div className="absolute xs:hidden top-56">
            <img src={icon} alt="logo akce" className="w-[10rem] mt-0"/>
          </div>
          

        </div>

        <div className="absolute inset-0 flex flex-col xs:flex-row items-center xs:items-end justify-end xs:justify-center z-10 pb-16 space-x-1 xs:space-x-10 space-y-3 xs:space-y-0 mx-4">
        <div className="">
            <button className={`${styles.button1} bg-red-500 shadow-2xl shadow-black rounded-2xl px-10 xs:px-5 py-2 hover:bg-red-600 hover:scale-105`}>
                Přihlásit se
            </button>
        </div>

        <div className="">
            <a href="/"><button className={`${styles.button1} bg-white rounded-2xl px-3 xs:px-5 py-2 hover:bg-gray-300 hover:scale-105`}>
                Dozvědět se více
                
            </button>
            </a>
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

export default About

