import React from 'react'
import Introduction from './Introduction'
import Skill from './Skill'

const About = () => {
    const skilldata =[
        {
            name:"frontend",
            skill:["HTML5","CSS3","React","Bootstrap","Tailwind CSS"]
        },
        {
            name:"backend",
            skill:["Spring","Spring Boot","Spring MVC","Hibernate","Spring Data JPA","JWT","Spring Security","REST APIs","Microservices","Spring AOP"]
        },
        {
            name:"database",
            skill:["MySQL","Oracle SQL","PostgreSQL"]
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