import { FaInstagram } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { IoBasketballSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import ImageSection from "./ImageSection";
import Details from "./Details";

const HeroSection = () => {
  const data =[{icon:<FaInstagram />,
                link:"https://www.instagram.com/himansu_k_s_03?igsh=c2Zscjd1YzQyN2c4"
                },
                {icon:<TfiLinkedin />,
                  link:"https://www.linkedin.com/in/himansu-kumar-sahoo-350730310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                },
                {icon:<IoBasketballSharp />,
                  link:""},
                {icon:<FaGithub />,
                  link:"https://github.com/himansukumarsahoo"}]
  return (
    <div className='hero' id="hero">
        <ImageSection/>
        <Details icondata={data}/>
    </div>
  )
}

export default HeroSection