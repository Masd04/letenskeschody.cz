import React from 'react'
import styles from '../style'

function Concept({  id  }) {
  return (
    <>
    <div id={id} className="w-[97%] xs:w-[50%] mt-16 mb-10 bg-white bg-opacity-70 rounded-xl px-8">
      <h1 className={`${styles.heading3}`}>Koncept</h1>

      <div className={`${styles.paragraphConc} text-left mb-5`}>
        <p>Krátký běžecký závod, při kterém si člověk sáhne na dno svých sil a zároveň si užije jeden z nejkrásnějěích výhledů, které Praha nabízí.</p>
        <p>Kromě sportovního zážitku organizátoři připravují také doprovodný program, který nadchne i milovníky hudby a dobrého jídla.</p>
      </div>

      <div className={`${styles.paragraphConc} text-left`}>
      
      <p>Součástí tohoto programu bude i soutěž v hodech na koš, kterou zrealizujeme ve spolupráci s UK FTVS a Českým basketbalovým svazem.</p>
      <p>Do závodu se může přihlásit každý milovník sportu.</p>
      <p>Nejmladší kategorie je pro děti do 13 let, závod si ale mohou zaběhnout i zkušenější závodníci.</p>
      <p>Kategorie MASTERS čeká na sportovce starší 45 let.</p>
      <div className="hidden xs:flex"><p className="text-[15px]"><b>VŠICHNI ZÁVODNÍCI SE MUSÍ PŘEDEM REGISTROVAT FORMULÁŘEM ZDE<span className="ml-10">--&gt;</span></b></p></div>
      <div className="xs:hidden flex text-center mt-[1rem]"><p className="text-"><b>VŠICHNI ZÁVODNÍCI SE MUSÍ PŘEDEM REGISTROVAT FORMULÁŘEM ZDE NA STRÁNCE</b></p></div>
      </div>

    </div>
    </>
  )
}

export default Concept
