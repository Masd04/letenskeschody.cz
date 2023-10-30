import React from 'react'
import styles from '../style'

function Categories() {
  return (
    <>
    <div>

      <h1 className={`${styles.heading3}`}>Kvalifikační běhy daných kategorií</h1>

    <div className="flex justify-evenly">

      <div className="flex-col border-2 border-gray-700 rounded-xl py-5 px-10">
      <div>
        <p className="text-yellow-400">Mladší žačky (do 12 let)</p>
        <p className="text-yellow-400">Mladší žáci ( do 12 let)</p>
      </div>

      <div>
        <p className="text-blue-400">Dorostenky (do 15 let)</p>
        <p className="text-blue-400">Dorostenci (do 15 let)</p>
      </div>

      <div>
        <p className="text-green-500">Juniorky (do 18let)</p>
        <p className="text-green-500">Junioři (do 18 let)</p>
      </div>
      </div>

      <div className="flex flex-col border-2 border-gray-700 rounded-xl py-5 px-10">
      <div>
        <p className="text-red-500">Ženy</p>
        <p className="text-red-500">Muži</p>
      </div>

      <div>
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
