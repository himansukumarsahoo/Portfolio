import React from 'react'
import { FaRegFileLines } from 'react-icons/fa6'

const Introduction = () => {
  return (
    <div className="introduction_box">
        <div className="textpart">
            <h2>my introduction</h2>
            <p>I'm <strong>Himansu Kumar sahoo</strong>, a fullstack developer from odisha. I enjoy building responsive and user-friendly websits. Skilled in HTML, CSS, and JavaScript with hands-on project experience. Created a fashion e-commerce site and persional portfolio. I'm passionate about clean UI and mobile-first design. Lookingto grow in a tech-driven team and learn more everyday.</p>
        </div>
        <div className="dwnldpart">
            <button className='dwnd-btn'><a>Download CV <FaRegFileLines/></a></button>
        </div>
    </div>
  )
}

export default Introduction