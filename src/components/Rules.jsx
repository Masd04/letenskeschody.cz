import React from 'react'
import styles from '../style'
import { random } from '../static/img'



function Rules() {
  return (
    <>
    <div className="flex justify-evenly pt-4 pb-12 mb-[-1.5rem]">

    <div className="flex">

      

    <div className={`${styles.paragraph} text-center`}>
      <h1 className={`${styles.heading3}`}>Pravidla</h1>
      <div className="text-left ml-10 pl-[5.2rem]">
      <p className="list-dot">JEDEN KVALIFIKAČNÍ běh pro všechny</p>
      <p className="list-dot">Běžci vybíhají jednotlivě v intervalech 15 sekund</p>
      <p className="list-dot">Během závodu je zakázán fyzický kontakt mezi závodníky</p>
      <p className="list-dot">Běžci si nemůžou vzájemně žádným způsobem ovlivňovat výkony<br />
      <span className="text-base">(Tj. Nesmí se strkat, škrábat, podrážet nohy, tahat za tričko, vlasy, ani nic jiného)</span></p>
      <p className="list-dot">V případě zájmu si závodník může zažádat o opakovaný běh či podat protest</p>
      <p className="list-dot">Formulář je třeba vyplnit písemně a náležitě jej odůvodnit</p>
      <p className="list-dot">Formuláře budou k dispozici ve stánku organizátorů, kteří zároveň rozhodnou o vyhovění či nevyhovění žádosti</p>
      <p className="list-dot mt-5">Z celkového počtu závodníků se z každé kategorie dostane do finálového výběhu pouze 10 běžců</p>
      </div>
      

    </div>

    </div>

    <div className="flex justify-end">
      <img src={random} alt="" className="w-[85%] mr-10 rounded-lg"/>
    </div>

    </div>
    </>
  )
}

export default Rules
