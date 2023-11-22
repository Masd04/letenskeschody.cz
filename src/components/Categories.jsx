import React from 'react'
import styles from '../style'

function Categories() {
  return (
    <>
    <div>

      <h1 className={`${styles.heading3}`}>Kvalifikační běhy daných kategorií</h1>

    <div className="flex justify-evenly">

      <div className="flex-col border-2 border-gray-700 rounded-xl py-5 px-10">
      <div className={`${styles.paragraph} text-yellow-400`}>
        <p className="">Mladší žačky (do 12 let)</p>
        <p className="">Mladší žáci ( do 12 let)</p>
      </div>

      <div className={`${styles.paragraph} text-blue-400`}>
        <p className="">Dorostenky (do 15 let)</p>
        <p className="">Dorostenci (do 15 let)</p>
      </div>

      <div className={`${styles.paragraph} text-green-500`}>
        <p className="">Juniorky (do 18let)</p>
        <p className="">Junioři (do 18 let)</p>
      </div>
      </div>

      <div className="flex flex-col border-2 border-gray-700 rounded-xl py-5 px-10">
      <div className={`${styles.paragraph} text-red-500`}>
        <p className="">Ženy</p>
        <p className="">Muži</p>
      </div>

      <div className={`${styles.paragraph}`}>
        <p className="">ŽENY MASTERS (45 +)</p>
        <p className="">MUŽI MASTERS (45 +)</p>
      </div>
      </div>

    </div>
    </div>
    </>
  )
}

export default Categories