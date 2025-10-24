import React from 'react'
import ProjectBox from './ProjectBox'
import { PiBriefcaseDuotone } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { PiMedalFill } from "react-icons/pi";

const Project = () => {
    const projectdata =[
        {
            classname:"complete",
            icon:<PiBriefcaseDuotone />,
            head:"Completed",
            para:"3 Finished Project"
        },
        {
            classname:"client",
            icon:<FaUserTie />,
            head:"Clients",
            para:"25+ Happy Clients"
        },
        {
            classname:"experience",
            icon:<PiMedalFill />,
            head:"Experience",
            para:"2+ Year In The Field"
        }
    ]
  return (
    <>
        <h2 className="projects" id="projects">Projects</h2>
        <ProjectBox data={projectdata}/>
    </>
  )
}

export default Project