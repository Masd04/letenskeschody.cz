import React from 'react'
import styles from '../style'

function Categories() {
  return (
    <div className="py-8 px-4">
      <h1 className={`${styles.heading3} mb-6`}>Kvalifikační běhy daných kategorií</h1>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col border-4 border-gray-700 rounded-xl py-5 px-5 md:px-10 w-full md:w-auto">
          <div className={`${styles.paragraphQuali} text-yellow-400`}>
            <p>Mladší žačky (do 12 let)</p>
            <p>Mladší žáci (do 12 let)</p>
          </div>

          <div className={`${styles.paragraphQuali} text-blue-400 mt-4`}>
            <p>Dorostenky (do 15 let)</p>
            <p>Dorostenci (do 15 let)</p>
          </div>

          <div className={`${styles.paragraphQuali} text-green-500 mt-4`}>
            <p>Juniorky (do 18let)</p>
            <p>Junioři (do 18 let)</p>
          </div>
        </div>

        <div className="flex flex-col border-4 border-gray-700 rounded-xl py-5 px-5 md:px-10 w-full md:w-auto items-center">
          <div className={`${styles.paragraphQuali} text-red-500`}>
            <p>Ženy</p>
            <p>Muži</p>
          </div>

          <div className={`${styles.paragraphQuali} mt-4`}>
            <p>ŽENY MASTERS (45 +)</p>
            <p>MUŽI MASTERS (45 +)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
