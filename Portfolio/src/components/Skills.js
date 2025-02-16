import './SkillsStyles.css';
import Carousel from "react-multi-carousel"; 
import "react-multi-carousel/lib/styles.css"; 
import meter1 from "../assets/meter1.svg"
import meter2 from "../assets/meter2.svg"
import meter3 from "../assets/meter3.svg"
import colorSharp from "../assets/color-sharp.png"

import React from 'react'
import { Container,Col, Row } from 'react-bootstrap';

    const Skills = () => {
   
    const responsive = { 
    superLargeDesktop: { 
 
    breakpoint: { max: 4000, min: 3000 }, 
        items: 5 
    }, 
    desktop: { 
        breakpoint: { max: 3000, min: 1024}, 
        items: 3 
    }, 
    tablet: { 
        breakpoint: { max: 1024, min: 464}, 
        items: 2 
    }, 
    mobile: { 
        breakpoint: { max: 464, min: 0 }, 
        items: 1 
    } 
}; 

  return (
    <div className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>
                            Skills
                        </h2>
                        <p>I have good knowledge in web development especially frontend-react.js,node-js,html,css, javascript<br></br>I know the indermediate of figma UI/UX</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider' >
                            <div className='item'>
                                <img src={meter1} alt='img'/>
                                <h5>Web Development</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt='img'/>
                                <h5>Figma UI/UX</h5>
                            </div>
                            <div className='item'>
                                <img src={meter3} alt='img'/>
                                <h5>React</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt='img'/>
                                <h5>MangoDB</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left'  src={colorSharp} alt='img' />
    </div>
  )
}

export default Skills