import React from 'react'
import styles from '../style';
import { Concept, Slogan, Rules, QualiRuns, FinRuns, Categories, Teaser, Application, Footer } from '../components';
import { bg } from '../static/img'


function Home() {
  return (
    <>

    <div className="bg-cover bg-center fixed top-[3.9rem] left-0 w-full h-[calc(100%)] z-0" /* style={{ backgroundImage: `url(${bg})` }} */></div>

    <div className="relative z-10">
    <div className="">
      <h1 className={`${styles.heading2} mt-5`}>Výběh Letenských schodů</h1>
    </div>

    {/* <div className="">
    <Teaser />
    </div> */}

    <Slogan />

    <div className="space-y-20">

    <div className="flex flex-row justify-evenly">
    <Concept />
    <Application />
    </div>

    

    
    <Rules />

    <div className="flex flex-row justify-evenly">
    <QualiRuns />
    <FinRuns />
    </div>

    <Categories />

    

    </div>

    </div>

    <Footer />

   
    </>
  )
}

export default Home
