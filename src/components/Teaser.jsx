import React from 'react'
import styles from '../style'
import { teaser } from '../static/img'

function Teaser() {
  return (
    <>
    <div className="flex justify-center items-center">
      <video className="w-[65%] h-auto" controls autoPlay muted src={teaser} alt="Teaser video" type="video/mp4"></video>

    </div>
    </>
  )
}

export default Teaser
