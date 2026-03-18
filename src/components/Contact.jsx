import React from 'react'
import FindMe from './FindMe'
import Form from './Form'

const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact" aria-label="Contact section">
        <h2 className="contact">Get in touch</h2>
        <p className="contact-para">Do you have a project in mind? Contact me here.</p>
        <div className="contact-container">
          <FindMe />
          <Form />
        </div>
      </section>
    </>
  )
}

export default Contact