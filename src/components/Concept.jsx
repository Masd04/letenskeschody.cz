import React from 'react'
import styles from '../style'

function Concept() {
  return (
    <>
    <div className="w-[50%]">
      <h1 className={`${styles.heading3}`}>Koncept</h1>

      <div className={`${styles.paragraph} text-left mb-5`}>
        <p>Krátký běžecký závod, při kterém si člověk sáhne na dno svých sil a zároveň si užije jeden z nejkrásnějěích výhledů, které Praha nabízí.</p>
        <p>Kromě sportovního zážitku organizátoři připravují také doprovodný program, který nadchne i milovníky hudby a dobrého jídla.</p>
      </div>

      <div className={`${styles.paragraph} text-left`}>
      
      <p>Součástí tohoto programu bude i soutěž v hodech na koš, kterou zrealizujeme ve spolupráci s UK FTVS a Českým basketbalovým svazem.</p>
      <p>Do závodu se může přihlásit každý milovník sportu.</p>
      <p>Nejmladší kategorie je pro děti do 13 let, závod si ale mohou zaběhnout i zkušenější závodníci.</p>
      <p>Kategorie MASTERS čeká na sportovce starší 45 let.</p>
      </div>

    </div>
    </>
  )
}

export default Concept
