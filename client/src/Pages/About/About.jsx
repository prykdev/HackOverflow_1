import React from "react"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import "./About.scss"
import eren from "./eren.png"
import priyanka from "./priyanka.png"
import ayush from "./ayush.png"
import { AboutCard } from "../../Components/AboutCard/AboutCard"
const About = () => {
  return (
    <div className='home'>
      <NavbarComponent />
      <div className='about-main'>
        <AboutCard
          name='Tushar Goyal'
          role='Backend Developer'
          linkedin='https://www.linkedin.com/in/tgoyal63'
          github='https://github.com/tgoyal63'
          email=''
          twitter='https://twitter.com/tgoyal63'
          img={eren}
        />
        <AboutCard
          name='Priyanka Prasad'
          role='Web Designer'
          linkedin='https://www.linkedin.com/in/prykdev/'
          github='https://github.com/prykdev'
          email='priyankaafssulur@gmail.com'
          twitter='https://twitter.com/prykdev'
          img={priyanka}
        />
        <AboutCard
          name='Ayush Singla'
          role='Frontend Developer'
          linkedin='https://www.linkedin.com/in/ayu913'
          github='https://github.com/ayu913'
          email=''
          twitter='https://twitter.com/ayu913'
          img={ayush}
        />
      </div>
    </div>
  )
}

export default About
