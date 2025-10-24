import Navlist from "./Navlist"
import { FaRegFileLines } from "react-icons/fa6";
const Navbar = () => {
    const listitem=[{name:"Home",link:"#hero"},
                    {name:"About",link:"#about"},
                    {name:"Project",link:"#projects"},
                    {name:"Contact",link:"#contact"}]
  return (
    <nav>
        <div className="nav-name"><a href="#">Himansu</a></div>
        <Navlist item={listitem}/>
        <div className="nav-btn">
            <button className='dwnd-btn'>
                <a>Download CV <FaRegFileLines /></a>
            </button>
        </div>
    </nav>
  )
}

export default Navbar