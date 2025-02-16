import { Link } from "react-router-dom"
import "./NavbarStyles.css";
import React, {useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";


const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick= () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >= 1 ){
            setColor(true); 
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    const scrollToSection = (id, event) => {
        event.preventDefault(); 
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }

        document.querySelectorAll(".nav-menu li a").forEach((link) => {
            link.classList.remove("active");
        });

        event.target.classList.add("active");

        setClick(false);
      };
      

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/" >
        <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"
        } >
            <li>               
                <a href="#home"  onClick={(e) => scrollToSection("home", e)}>Home</a>                
            </li>
            <li>             
                <a href="#about"  onClick={(e) => scrollToSection("about", e)}>About Me</a>                
            </li>
            <li>          
            <a href="#skills" onClick={(e) => scrollToSection("skills", e)}>Skills</a>
            </li>
            <li>
            <a href="#project" onClick={(e) => scrollToSection("project", e)}>Projects</a>
            </li>
            <li>
            <a href="#contact" onClick={(e) => scrollToSection("contact", e)}>Contact</a>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}} />)
            : ( <FaBars size={20} style={{color: "#fff"}} />)
            }
        </div>
    </div>
  )
}

export default Navbar