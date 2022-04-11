import React from "react"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { Footer } from "../../Components/Footer/Footer.jsx"
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap"
import "./About.scss"
import { AboutCard } from "../../Components/AboutCard/AboutCard"
const About = () => {


  return (
    <div className='home'>
    <NavbarComponent />
    <div className="about-main">
      <AboutCard name="Tushar Goyal" role="Backend Developer" linkedin="https://www.linkedin.com/in/tgoyal63" github="https://github.com/tgoyal63" email="" twitter="https://twitter.com/tgoyal63"/>
      <AboutCard name="Priyana Prasad" role="Web Designer" linkedin="https://www.linkedin.com/in/prykdev/"github="https://github.com/prykdev" email="priyankaafssulur@gmail.com" twitter="https://twitter.com/prykdev" />
      <AboutCard name="Ayush Singla" role="Frontend Developer" linkedin="https://www.linkedin.com/in/ayu913"github="https://github.com/ayu913" email="" twitter="https://twitter.com/ayu913"/>
    </div>
  </div>
  )
  
}

export default About
