import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import "./ProjectHeroImg"

const HeroImg = () => {
  
  const scrollToSection = (id, event) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="hero" id="home">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, I am Front-End Developer.</p>
            <h1>React Developer.</h1>
            <div>
            <a href="#project"  onClick={(e) => scrollToSection("project", e)} className="btn">Projects</a>
            <a href="#contact"  onClick={(e) => scrollToSection("contact", e)} className="btn btn-light">Contact</a>
            </div>
        </div>
    </div>
  
  )
}

export default HeroImg