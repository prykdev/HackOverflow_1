import React, { useEffect, useState } from "react"
import { Nav, NavDropdown, Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAppContext } from "../../Context/appContext"
import { useNavigate } from "react-router-dom"
import Button from "@material-ui/core/Button"
import "./NavbarComponent.scss"
import "font-awesome/css/font-awesome.min.css"

const NavbarComponent = ({ pathname }) => {
  const { token, logoutUser, searchUser, socials } = useAppContext()
  const navigate = useNavigate()
  const [username, setSearchUsername] = useState("")

  const [isLogin, setIsLogin] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    console.log(e.target)
    setSearchUsername(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await searchUser(username)
    navigate(`/searchdashboard/{username}`, {
      state: {
        github: socials.github,
        hackerrank: socials.hackerrank,
        codechef: socials.codechef,
      },
    })
  }
  useEffect(() => {
    if (pathname === "/" || pathname === "/register") {
      setIsLogin(true)
    } else if (!token) {
      navigate("/")
    }
  }, [token, navigate, pathname])
  return (
    <Navbar sticky='top' className='navheader' collapseOnSelect expand='lg'>
      <Container>
        <Navbar.Brand className='nav-logo' style={{ cursor: "pointer" }}>
          {" "}
          <span>Ha</span>ck<span>ov</span>er<span>Flow</span>
        </Navbar.Brand>
        <div className='search-bar'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='username'
              value={username}
              onChange={handleChange}
              className='search-input'
              placeholder='Enter Username'
            />
            <button className='btn btn-outline-secondary' type='submit'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {!isLogin ? (
            <Nav className='ms-auto'>
              <Nav.Link
                as={Link}
                to='/dashboard'
                style={{ textDecoration: "none" }}
              >
                Dashboard
              </Nav.Link>
              <Nav.Link
                as={Link}
                to='/leaderboard'
                style={{ textDecoration: "none" }}
              >
                Leaderboard
              </Nav.Link>

              <Nav.Link
                as={Link}
                to='/friends'
                style={{ textDecoration: "none" }}
              >
                Friends
              </Nav.Link>

              <Nav.Link
                as={Link}
                to='/about'
                style={{ textDecoration: "none" }}
              >
                About
              </Nav.Link>
              <NavDropdown
                title='Profile▼'
                id='collasible-nav-dropdown'
                style={{ fontSize: "16px" }}
              >
                <NavDropdown.Item as={Link} to='/settings'>
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/changepassword'>
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>
              <Button className='logout-btn' onClick={logoutUser}>
                Logout
              </Button>
            </Nav>
          ) : (
            <></>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
