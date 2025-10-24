import React from 'react'
import FindMe from './FindMe'
import Form from './Form'

const Contact = () => {
  return (
    <>
        <h2 className="contact" id='contact'>Get in touch</h2><br/>
        <p className="contact-para">Do you have a project in your mind, contact me here</p>
        <div className='contact-container'>
            <FindMe/>
            <Form/>
        </div>
    </>
  )
}

export default Contact