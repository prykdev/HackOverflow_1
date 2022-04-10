import React, { useEffect } from "react"
import "./styles.scss"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { Outlet } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { Footer } from "../../Components/Footer/Footer.jsx"
import { useAppContext } from "../../Context/appContext"

const Dashboard = () => {
  const {
    getGithub,
    graph,
    stats,
    mul,
    contributions,
    username,
    public_repos,
    public_gists,
    followers,
    following,
    organizations,
    created_at,
  } = useAppContext()

  useEffect(() => {
    getGithub()
  }, [])

  return (
    <div className='dashboardHome'>
      <Outlet />
      <NavbarComponent />

      <div className='dashboardCard text-center'>
        <h1>Github</h1>
        <h6>&#123;Github username:{username}&#125;</h6>
        <div className='card-container'>
          <Container>
            <Row>
              <Col lg={12}>
                <h4> Contribution graph </h4>
                <img src={graph} width='60%' />
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <h4> Github Stats </h4>
                <img src={stats} width='100%' />
              </Col>
              <Col lg={4}>
                <h4>Most Used Languages </h4>
                <img src={mul} width='100%' />
              </Col>
              <Col lg={4}>
                <h4>Contributions</h4>
                <img src={contributions} width='100%' />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <div className='github-cards'>
                <div className='github-card'>
                  <h3>
                    <p>Public Repos</p>
                  </h3>
                  <p>{public_repos}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Public Gists</p>
                  </h3>
                  <p>{public_gists}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Followers</p>
                  </h3>
                  <p>{followers}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Following</p>
                  </h3>
                  <p>{following}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Organizations</p>
                  </h3>
                  <p>{organizations}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Created At</p>
                  </h3>
                  <p>{created_at}</p>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
