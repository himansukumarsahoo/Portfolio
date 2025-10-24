import React from 'react'
import { PiArrowElbowRightDownBold } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const FindMe = () => {
  return (
    <div className="left-contact">
        <div className="findme">
            <h1>findme<PiArrowElbowRightDownBold /></h1>
            <div className="para">
                <p><HiOutlineMail />Email: himansukumarbubu@gmail.com</p>
                <p><FiPhoneCall />Tel: +91 9178857917</p>
            </div>
        </div>
    </div>
  )
}

export default FindMe