import React, { useEffect, useState, useRef } from "react"
import { Nav, NavDropdown, Container, Navbar, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAppContext } from "../../Context/appContext"
import { useNavigate } from "react-router-dom"
import "./NavbarComponent.scss"
import "font-awesome/css/font-awesome.min.css"
import { ToastContainer, toast } from "react-toastify"

const NavbarComponent = ({ pathname }) => {
  const { token, logoutUser, socials, loginUsername } = useAppContext()
  const navigate = useNavigate()
  const [username, setSearchUsername] = useState("")

  const [isLogin, setIsLogin] = useState(false)
  const [isLogoutUser, setIsLogoutUser] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    setSearchUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (username === loginUsername) {
      navigate("/dashboard")
    } else {
      navigate(`/searchdashboard/${username}`)
    }
  }

  const proRef = useRef()
  useEffect(() => {
    if (pathname === "/" || pathname === "/register") {
      setIsLogin(true)
    } else if (!token) {
      navigate("/")
    }

    if (isLogoutUser) {
      toast("User Logout Successfully")
    }
  }, [token, socials, isLogoutUser])

  const handleLogout = (e) => {
    setIsLogoutUser(!isLogoutUser)
    setTimeout(() => {
      logoutUser()
    }, 3000)
  }

  return (
    <Navbar sticky='top' className='navheader' collapseOnSelect expand='lg'>
      <Container>
        <Navbar.Brand className='nav-logo' style={{ cursor: "pointer" }}>
          {" "}
          <span>Ha</span>ck<span>Ov</span>er<span>flow</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {!isLogin ? (
            <Nav className='ms-auto'>
              <div className='search-bar'>
                <form onSubmit={handleSubmit}>
                  <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={handleChange}
                    className='search-input'
                    placeholder='Enter Username'
                    required
                  />
                  <button className='btn btn-outline-secondary' type='submit'>
                    <i className='fa fa-search'></i>
                  </button>
                </form>
              </div>
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
                ref={proRef}
                title='Profile ▼'
                id='collasible-nav-dropdown'
              >
                <NavDropdown.Item as={Link} to='/settings'>
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/changepassword'>
                  Change Password
                </NavDropdown.Item>
                <NavDropdown.Item as={Button} onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Button className='logout-btn' onClick={logoutUser}>
                Logout
              </Button> */}
            </Nav>
          ) : (
            <></>
          )}
        </Navbar.Collapse>
      </Container>
      <ToastContainer />
    </Navbar>
  )
}

export default NavbarComponent
