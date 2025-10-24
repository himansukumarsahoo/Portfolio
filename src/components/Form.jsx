import React from 'react'
import { BiPaperPlane } from "react-icons/bi";

const Form = () => {
  return (
    <>
        <form action="" className="right-contact">
                <div className="namemail">
                    <div className="name"><input type="text" placeholder="Name"/></div>
                    <div className="mail"><input type="email" placeholder="Email"/></div>
                </div>
                <div className="message">
                    <textarea placeholder="Message"></textarea>
                </div>
                <div className="send">
                    <button>Send<BiPaperPlane size={20}/></button>
                </div>
        </form>
    </>
  )
}

export default Form