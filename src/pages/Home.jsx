import React from 'react'
import styles from '../style';
import { Concept, Slogan, Rules, QualiRuns, FinRuns, Categories, Teaser, Application, Footer } from '../components';
import { bg } from '../static/img'


function Home() {
  return (
    <>

    

    <div className="relative z-10 bg-bigi">
    <div className="">
      <h1 className={`${styles.heading2} mt-5`}>Výběh Letenských schodů</h1>
    </div>

   {/*  <div className="">
    <Teaser />
    </div> */}

    <Slogan />

    <div className="">

    <div className="relative">
      <div className="bg-cover absolute top-0 left-[1%] w-[98%] h-[105%] z-[-10] bg-img ellipse-clip stairs-clip " style={{ backgroundImage: `url(${bg})` }}></div>
                  
      <div className="flex flex-row justify-evenly z-10">
        <Concept />
        <Application />
      </div>
    </div>

    

    <div className="relative">
    <div className="bg-white ellipse-clip stairs-clip"> 
    <Rules />
    </div>
    </div>

    <div className="relative bg-white pt-4 stairs-clip">
    <div className="flex flex-row justify-evenly">
    <QualiRuns />
    <FinRuns />
    </div>
    </div>

    <div className="bg-white mt-10 pt-4 pb-12 stairs-clip"> 
    <Categories />
    </div>
    

    </div>

    </div>

    <Footer />

    
   
    </>
  )
}

export default Home
