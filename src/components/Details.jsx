import React from 'react'

const Details = ({icondata}) => {
  return (
    <div className="right-hero">
                <div className="text-container">
                        <span>Himansu Kumar Sahoo</span>
                        <h1>i'm</h1>
                        <h1>Java Full Stack Developer</h1>
                        <p>I have Completed my master degree at fakir mohan university(2023-25) .</p>
                        <div className="buttons">
                            <button className="hire_btn">Hire me</button>
                            <button className="dwnd-btn">Download CV </button>
                        </div>
                </div>
                <div className="logo-container">
                    {
                        icondata.map((ele)=>{
                            return(
                                    <div className="icons"><a href={ele.link} target="_blank">{ele.icon}</a></div>
                            )
                        })
                    }
                </div>
            </div>
  )
}

export default Details