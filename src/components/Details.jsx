import React from 'react'
import { assets } from '../assets/Index'
const Details = ({icondata}) => {
  return (
    <div className="right-hero">
                <div className="text-container">
                        <span>Himansu Kumar Sahoo</span>
                        <h1>I'm</h1>
                        <h1>Java Full Stack Developer</h1>
                        <p>
                          Software Developer skilled in Java, Spring Boot, and React—building microservices and REST APIs with JWT authentication and MySQL.
                        </p>
                        <div className="buttons">
                            <a className="hire_btn" href="#contact">Hire me</a>
                            <a className="dwnd-btn" href={assets.resume} download="Himansu-resume.pdf">
                              Download CV
                            </a>
                        </div>
                </div>
                <div className="logo-container">
                    {
                        icondata.map((ele, idx)=>{
                            return(
                                    <div className="icons" key={`${ele.link}-${idx}`}>
                                      <a href={ele.link} target="_blank" rel="noreferrer">{ele.icon}</a>
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
  )
}

export default Details