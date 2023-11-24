import React from 'react'
import styles from '../style';
import { schody } from '../static/img'
import { Countdown } from '../components';
import { icon } from '../static/img'
import { Link, useNavigate } from 'react-router-dom';



const smallScreenStyle = window.innerWidth < 480 ? { backgroundSize: '110%' } : {};

function Landing() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home', { state: { scrollTo: 'concept' } });
  };


  return (
    <>
    <div className="fixed left-0 right-0 top-0 h-16 xs:h-20 shadow-md border-b-2 border-gray-700 bg-black z-20 flex items-center justify-center">
      <Link to="/home"><p className={`${styles.logoH} flex scale-100 hover:scale-105`}>VYBEH LETENSKYCH SCHODU.CZ</p></Link>
    </div>
    
    
    <div className="relative h-[90vh] max-w-[100%] rounded-b-lg overflow-hidden mt-0">
        <div className={`relative xs:hidden w-[100%] h-full bg-left xs:bg-center bg-cover z-[-10] mt-0`} style={{ backgroundImage: `url(${schody})`, backgroundPosition: '-7rem center'}}></div>
        <div className="hidden xs:block w-[100%] h-full bg-left xs:bg-center bg-cover z-[-10] mt-0" style={{ backgroundImage: `url(${schody})`}}></div>
            
        <div className="absolute inset-0 flex flex-col items-center justify-top z-10">
          
          <div className="mt-6">
            <h1 className={`${styles.nadpis} xs:text-[68px] text-[40px] text-red-600 w-full`}>KVĚTEN 2024</h1>
            <Countdown />
          </div>

          
          <div className="hidden xs:absolute md:absolute xl:absolute left-0">
            <img src={icon} alt="logo akce" className="w-[18rem] mt-0"/>
          </div>
          <div className="absolute xs:hidden top-56">
            <img src={icon} alt="logo akce" className="w-[10rem] mt-0"/>
          </div>
          

        </div>

        <div className="absolute inset-0 flex flex-col xs:flex-row items-center xs:items-end justify-end xs:justify-center z-10 pb-16 space-x-1 xs:space-x-10 space-y-3 xs:space-y-0 mx-4">
        <div className="">
          
            <button onClick={handleButtonClick} className={`${styles.button1} bg-red-500 shadow-2xl shadow-black rounded-2xl px-10 xs:px-5 py-2 hover:bg-red-600 hover:scale-105`}>
                Přihlásit se
            </button>
          
        </div>

        <div className="">
        <Link to="/home"><button className={`${styles.button1} bg-white rounded-2xl px-3 xs:px-5 py-2 hover:bg-gray-300 hover:scale-105`}>
                Dozvědět se více
                
            </button>
        </Link>
        </div>
        
        </div> 
      

      </div>


    
      
    </>
  )
}

export default Landing
