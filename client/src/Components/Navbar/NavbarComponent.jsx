import React from "react"
import { Nav, NavDropdown, Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>HACKOVERFLOW</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to='/dashboard'>
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to='/leaderboard'>
              Leaderboard
            </Nav.Link>
            <NavDropdown
              title='Profile'
              id='collasible-nav-dropdown'
              style={{ fontSize: "16px" }}
            >
              <NavDropdown.Item as={Link} to='/setting'>
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
