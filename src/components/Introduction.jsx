import React from 'react'
import { FaRegFileLines } from 'react-icons/fa6'
import { assets } from '../assets/Index'

const Introduction = () => {
  return (
    <div className="introduction_box">
        <div className="textpart">
            <h2>my introduction</h2>
            <p>
              I'm <strong>Himansu Kumar Sahoo</strong>, a software developer focused on <strong>Java, Spring Boot</strong>, and <strong>React</strong>.
              I build scalable <strong>microservices</strong> and <strong>REST APIs</strong>, work with <strong>JWT authentication</strong>, and design
              databases using <strong>MySQL</strong>. I enjoy writing clean, maintainable code and shipping user-friendly web apps.
            </p>
        </div>
        <div className="dwnldpart">
            <a className="dwnd-btn" href={assets.resume} download="Himansu-resume.pdf">
              Download CV <FaRegFileLines/>
            </a>
        </div>
    </div>
  )
}

export default Introduction