import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer" id="bottom">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>268 Pallipat, Tiruvallur, Tamilnadu, </p>
                        <p>India.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color: "#fff",marginRight:"2rem"}}/>+918892483437
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color: "#fff",marginRight:"2rem"}}/>devad4828@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About Devendhra A</h4>
                <p>
                Passionate web developer dedicated to crafting responsive, user-friendly websites with modern technologies. Skilled in front-end and back-end development, creating seamless digital experiences. Always eager to learn, innovate, and bring ideas to life through code.
                </p>
                <div className="social">
                    <FaFacebook size={30} style={{color: "#fff",marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{color: "#fff",marginRight:"1rem"}}/>
                    <FaInstagram  size={30} style={{color: "#fff",marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff",marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer