import React from "react"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import "./About.scss"
import eren from "./eren.png"
import priyanka from "./priyanka.png"
import ayush from "./ayush.png"
import { AboutCard } from "../../Components/AboutCard/AboutCard"
import { Footer } from "../../Components/Footer/Footer"
const About = () => {
  return (
    <>
      <div className='home'>
        <NavbarComponent />
        <div className='about-main'>
          <AboutCard
            name='Tushar Goyal'
            role='Backend Developer'
            linkedin='https://www.linkedin.com/in/tgoyal63'
            github='https://github.com/tgoyal63'
            email='mailto:tgoyal63@duck.com'
            twitter='https://twitter.com/tgoyal63'
            img={eren}
            portfolio='https://flowcv.me/tgoyal63'
          />
          <AboutCard
            name='Priyanka Prasad'
            role='Web Designer'
            linkedin='https://www.linkedin.com/in/prykdev/'
            github='https://github.com/prykdev'
            email='mailto:priyankaafssulur@gmail.com'
            twitter='https://twitter.com/prykdev'
            img={priyanka}
            portfolio='https://priyankaprasad.vercel.app/'
          />
          <AboutCard
            name='Ayush Singla'
            role='Frontend Developer'
            linkedin='https://www.linkedin.com/in/ayu913'
            github='https://github.com/ayu913'
            email='mailto:ayushsingla909@gmail.com'
            twitter='https://twitter.com/ayu913'
            img={ayush}
            portfolio='https://ayudev.vercel.app/'
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
