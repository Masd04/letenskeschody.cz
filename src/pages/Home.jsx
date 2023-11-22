import React from 'react'
import styles from '../style';
import { Concept, Slogan, Rules, QualiRuns, FinRuns, Categories, Teaser, Application, Footer, Hero } from '../components';
import { bg } from '../static/img'


function Home() {
  return (
    <>

    

    <div className="relative z-10 bg-bigi">
    

    <div className="">

    <div id='home' className="">
      {/* <div className="bg-cover absolute top-0 left-[1%] w-[98%] h-[105%] z-[-10] bg-img ellipse-clip stairs-clip " style={{ backgroundImage: `url(${bg})` }}></div>

      <div id='home' className="">
      <h1 className={`${styles.heading2} mt-6 pt-1`}>Výběh Letenských schodů</h1>
      <Slogan />
    </div> */}

      <Hero />

      </div>

    
                  
      <div  id='concept' className="flex flex-col xs:flex-row justify-evenly z-10 bg-white xs:stairs-clip">
        <Concept />
        <Application />
      </div>
    

    

    <div id='rules' className="relative">
    <div className="bg-white xs:ellipse-clip stairs-clip"> 
    <Rules />
    </div>
    </div>

    <div id='runs' className="relative bg-white pt-4 pb-20 xs:ellipse-clip xs:stairs-clip">
    <div className="flex flex-col xs:flex-row justify-evenly w-[94%] xs:w-full mx-auto xs:mx-0">
    <QualiRuns />
    <FinRuns />
    </div>
    </div>

    <div id='categories' className="bg-white mt-[-1.5rem] pt-4 pb-12 xs:stairs-clip"> 
    <Categories />
    </div>
    

    </div>

    </div>

    <Footer />

    
   
    </>
  )
}

export default Home