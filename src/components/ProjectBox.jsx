import React from 'react'

const ProjectBox = ({data}) => {
  return (
    <div className="project_container">
            {
                data.map((ele)=>{
                    return(
                        <div className={ele.classname}>
                            <div className="icon">{ele.icon}</div>
                            <h2>{ele.head}</h2>
                            <p>{ele.para}</p>
                        </div>
                    )
                })
            }
    </div>
  )
}

export default ProjectBox