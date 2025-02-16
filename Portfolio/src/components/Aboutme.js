import "./AboutmeStyles.css"
import React from 'react'
import {Link} from "react-router-dom"
import React1 from "../assets/React-1.jpg"
import React2 from "../assets/React-2.webp"


const Aboutme = () => {
  
    const scrollToSection = (id, event) => {
      event.preventDefault(); 
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  
  return (


    <div className="about" id="about">
    <div className="left">
        <h1>Who Am I?</h1>
      <p><span className="name">  Devendhra A </span><br></br>I am a react front-end developer. I create responsive secure websites for my clients.</p>
        <Link to="/"> 
          <a href="#contact" onClick={(e) => scrollToSection("contact", e)} className="btn">Contact</a>
        </Link>
    </div>
    <div className="right">
      <div className="img-container">
        <div className="img-stock top">
          <img src={React2} className="img" alt="true"/>
        </div>
        <div className="img-stock bottom">
          <img src={React1} className="img" alt="true"/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Aboutme