import React from 'react'
import { qualirun } from '../static/img'
import styles from '../style';


function QualiRuns() {
  return (
    <>
    <div>

      <h1 className={`${styles.heading3}`}>Kvalifikační trať</h1>

    <div className={`${styles.paragraph} text-center`}>
      <p>Délka trati: 1.140m</p>
      <p>Start a cíl: u Metronomu</p>
      <div className={`${styles.flexCenter}`}>
      <img src={qualirun} alt="Mapa kvalifikačního běhu" className={`w-100 h-auto mt-16 rounded-lg`}/>
      </div>
      

    </div>

    </div>
    </>
  )
}

export default QualiRuns
