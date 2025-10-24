import React from 'react'

const Skill = ({skill}) => {
  return (
    <div className='skills_box'>
        {
            skill.map((ele)=>{
                return(
                    <div className={ele.name}>
                        <h2>{ele.name}</h2>
                        <div id={ele.name}>
                            {
                                ele.skill.map((val)=>
                                    <span>{val}</span>
                                )
                            }
                        </div>
                    </div>
                )
            })
        }

    </div>
  )
}

export default Skill