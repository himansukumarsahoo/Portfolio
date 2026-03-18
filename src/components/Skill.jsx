import React from 'react'

const Skill = ({skill}) => {
  return (
    <div className='skills_box'>
        {
            skill.map((ele) => (
              <div className={ele.name} key={ele.name}>
                <h2>{ele.name}</h2>
                <div id={ele.name}>
                  {ele.skill.map((val) => (
                    <span key={`${ele.name}-${val}`}>{val}</span>
                  ))}
                </div>
              </div>
            ))
        }

    </div>
  )
}

export default Skill