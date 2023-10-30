import React from 'react'
import { finarun } from '../static/img'
import styles from '../style';

function FinRuns() {
  return (
    <>
    <div>

      <h1 className={`${styles.heading3}`}>Finálová trať</h1>

    <div className={`${styles.paragraph} text-center`}>
      <p>Délka trati: xxx m</p>
      <p>Start: pod schody</p>
      <p>Cíl: shodný s kvalifikací</p>
      <p>pouze výběh schodů, bez seběhnutí</p>
      <div className={`${styles.flexCenter}`}>
      <img src={finarun} alt="Mapa kvalifikačního běhu" className={`w-100 h-auto rounded-lg`}/>
      </div>
      

    </div>

    </div>
    </>
  )
}

export default FinRuns
