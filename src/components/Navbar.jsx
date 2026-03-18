import { useState } from "react";
import Navlist from "./Navlist";
import { FaRegFileLines } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { assets } from '../assets/Index'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const listitem = [
      { name: "Home", link: "#hero" },
      { name: "About", link: "#about" },
      { name: "Project", link: "#projects" },
      { name: "Contact", link: "#contact" },
    ];
  return (
    <nav>
        <div className="nav-name"><a href="#hero">Himansu</a></div>
        <button
            className="nav-toggle"
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
        >
            {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
        <Navlist
            item={listitem}
            isOpen={isMenuOpen}
            onNavigate={() => setIsMenuOpen(false)}
        />
        <div className="nav-btn">
            <a className="dwnd-btn" href={assets.resume} download="Himansu-resume.pdf">
              Download CV <FaRegFileLines />
            </a>
        </div>
    </nav>
  )
}

export default Navbar