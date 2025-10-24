import React from 'react'
import Introduction from './Introduction'
import Skill from './Skill'

const About = () => {
    const skilldata =[
        {
            name:"frontend",
            skill:["HTML","CSS","JavaScript","Bootstrap","ReactJs"]
        },
        {
            name:"backend",
            skill:["JAVA","C","Python"]
        },{
            name:"database",
            skill:["Oracle","MySQL"]
        }
    ]
  return (
    <>
        <h2 className="about" id='about'>About me</h2>
        <div className="about_container">
            <Introduction/>
            <Skill skill={skilldata}/>
        </div>
    </>
  )
}

export default About