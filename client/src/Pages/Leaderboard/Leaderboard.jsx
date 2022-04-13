import React from "react"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { Outlet } from "react-router-dom"
import { Table, Row, Button, Col } from "react-bootstrap"
import { Footer } from "../../Components/Footer/Footer.jsx"
import "./Leaderboard.scss"

const Leaderboard = () => {
  return (
    <div className='leaderboard-home'>
      <Outlet />
      <NavbarComponent />
      <div className='leaderboard-container'>
        <h1>Leaderboard</h1>
        <div className='leaderboard-card' style={{ color: "white" }}>
          <Row className='mx-0'>
            <Button
              as={Col}
              className='global-btn'
              style={{ marginRight: "20px" }}
            >
              Global
            </Button>
            <br />
            <Button as={Col} className='friend-btn'>
              Friends
            </Button>
          </Row>
          <Table bordered style={{ color: "white", "border-color": "#79828a" }}>
            <thead>
              <tr>
                <th>#Rank</th>
                <th width='60%'>Username</th>
                <th>Rating </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>@mdo</td>
              </tr>

              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>@mdo</td>
              </tr>

              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>@mdo</td>
              </tr>

              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>@mdo</td>
              </tr>

              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>@mdo</td>
              </tr>

              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>@mdo</td>
              </tr>

              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Leaderboard
