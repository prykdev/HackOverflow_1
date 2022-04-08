import React from "react"
import "./styles.scss"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { Outlet } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

const Dashboard = () => {
  return (
    <div className='dashboardHome'>
      <Outlet />
      <NavbarComponent />

      <div className='dashboardCard text-center'>
        <h1>Github</h1>
        <div className='card-container'>
          <Container>
            <Row>
              <Col lg={12}>
                <h4> Contribution graph </h4>
                <img
                  src='https://activity-graph.herokuapp.com/graph?username=prykdev&bg_color=1a1b27&color=6899eb&line=4c8ed9&point=255e5e&area=true&hide_border=true'
                  width='60%'
                />
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <h4> Github Stats </h4>
                <img
                  src='https://github-readme-stats.vercel.app/api?username=prykdev&show_icons=true&theme=tokyonight'
                  width='100%'
                />
              </Col>
              <Col lg={4}>
                <h4>Most Used Languages </h4>
                <img
                  src='https://github-readme-stats.vercel.app/api/top-langs/?username=prykdev&theme=tokyonight&layout=compact'
                  width='100%'
                />
              </Col>
              <Col lg={4}>
                <h4>Contributions</h4>
                <img
                  src='https://github-readme-streak-stats.herokuapp.com/?user=prykdev&theme=tokyonight&ring=DD2727&fire=DD2727&currStreakNum=6695E6'
                  width='100%'
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
