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
      <div className="bg-cover absolute top-0 left-[1%] w-[98%] h-[100%] z-[-10] bg-img ellipse-clip rounded-tl-3xl rounded-tr-3xl" style={{ backgroundImage: `url(${bg})` }}></div>
                  
      <div className="flex flex-row justify-evenly z-10">
        <Concept />
        <Application />
      </div>
    </div>

    

    <div className="relative">
    <div className="rounded-tl-3xl rounded-tr-3xl bg-white ellipse-clip"> 
    <Rules />
    </div>
    </div>

    <div className="">
    <div className="flex flex-row justify-evenly">
    <QualiRuns />
    <FinRuns />
    </div>
    </div>

    <div className="rounded-tl-3xl rounded-tr-3xl bg-white pb-12"> 
    <Categories />
    </div>
    

    </div>

    </div>

    <Footer />

    
   
    </>
  )
}

export default Home
