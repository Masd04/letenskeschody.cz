import React, { useEffect } from 'react'
import styles from '../style';
import { Concept, Slogan, Rules, QualiRuns, FinRuns, Categories, Teaser, Application, Footer, Hero } from '../components';
import { useLocation } from 'react-router-dom';



function Home() {

  const SCROLL_OFFSET = -130;

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'concept') {
      const section = document.getElementById('concept');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const offsetPosition = sectionTop + window.pageYOffset + SCROLL_OFFSET;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}, [location]);



  return (
    <>

    

    <div className="relative z-10 bg-bigi">
    

    <div className="">

    <div id='home' className="">
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
