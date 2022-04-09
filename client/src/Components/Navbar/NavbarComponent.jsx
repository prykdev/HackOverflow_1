import React, { useEffect } from "react";
import { Nav, NavDropdown, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/appContext";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./NavbarComponent.scss";

const NavbarComponent = () => {
  const { token, logoutUser } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);
  return (

    <Navbar className ="navheader" collapseOnSelect expand='lg' >
      <Container>
        <Navbar.Brand className="nav-logo" style={{cursor:"pointer"}} href="/homepage"> <span>Ha</span>ck<span>ov</span>er<span>Flow</span></Navbar.Brand>
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
              <NavDropdown.Item as={Link} to='/changepw'>
                Change Password
              </NavDropdown.Item>
            </NavDropdown>
            <Button
              style={{ color: "#fff" }}
              variant="contained"
              color="primary"
              onClick={logoutUser}
            >
              Logout
            </Button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
