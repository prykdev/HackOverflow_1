import React from "react"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { Footer } from "../../Components/Footer/Footer.jsx"
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap"
import "./About.scss"

const About = () => {
  return (
    <div className='home'>
    <NavbarComponent />
    <div class="settings">
      <Container>
        <h1>About Us</h1>
        <br/>
        <Row>
          <Col md={4}>
            <Card className='d-flex flex-column align-items-center text-center'>
              <br/>
              <img
                src='https://bootdey.com/img/Content/avatar/avatar7.png'
                alt='Admin'
                className='rounded-circle'
                width='250'
              />
              <br/>
              <div className="data">
                <p>Name:- Prykdev </p>
                 <p>Github:- Prykdev </p>
                <p>Linkedin:- Prykdev</p>
              </div>
            </Card>
            
          </Col>


         
        </Row>
      </Container>
    </div>
  </div>
  )
  
}

export default About
