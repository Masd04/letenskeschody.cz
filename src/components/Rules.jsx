import React from 'react'
import styles from '../style'

function Rules() {
  return (
    <>
    <div>

      <h1 className={`${styles.heading3}`}>Pravidla</h1>

    <div className={`${styles.paragraph} text-center`}>
      <p>JEDEN KVALIFIKAČNÍ běh pro všechny</p>
      <p>Běžci vybíhají jednotlivě v intervalech 15 sekund</p>
      <p>Během závodu je zakázán fyzický kontakt mezi závodníky</p>
      <p>Běžci si nemůžou vzájemně žádným způsobem ovlivňovat výkony<br />(Tj. Nesmí se strkat, škrábat, podrážet nohy, tahat za tričko, vlasy, ani nic jiného)</p>
      <p>V případě zájmu si závodník může zažádat o opakovaný běh či podat protest</p>
      <p>Formulář je třeba vyplnit písemně a náležitě jej odůvodnit</p>
      <p>Formuláře budou k dispozici ve stánku organizátorů, kteří zároveň rozhodnou o vyhovění či nevyhovění žádosti</p>
      <p className="mt-5">Z celkového počtu závodníků se z každé kategorie dostane do finálového výběhu pouze 10 běžců</p>
      

    </div>

    </div>
    </>
  )
}

export default Rules
