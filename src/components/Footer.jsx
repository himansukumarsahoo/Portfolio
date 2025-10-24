import { FaInstagram } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { IoBasketballSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const list=[{name:"Home",link:"#hero"},
                {name:"About",link:"#about"},
                {name:"Project",link:"#projects"},
                {name:"Contact",link:"#contact"}]
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
    <div className='footer'>
        <div className="name">Himansu kumar sahoo</div>
        <div className="list">
                <ul>
                    {
                        list.map((ele)=><li><a href={ele.link}>{ele.name}</a></li>)
                    }
                </ul>
        </div>
        <div className='icon'>
            {
                data.map((ele)=><div class="icons"><a href={ele.link}>{ele.icon}</a></div>)
            }
        </div>
        <div className="copyright">Copyright &copy;  <a href="#">  Himansu</a> - All rights reserved</div>
    </div>
  )
}

export default Footer