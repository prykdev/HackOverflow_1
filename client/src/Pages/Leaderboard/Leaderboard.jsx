import React from "react"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { Outlet } from "react-router-dom"
import { Table, Row, Button, Col } from "react-bootstrap"
import { Footer } from "../../Components/Footer/Footer.jsx"

const Leaderboard = () => {
  return (
    <div className='dashboardHome'>
      <Outlet />
      <NavbarComponent />
      <div className='dashboardCard text-center'>
        <h1>Leaderboard</h1>
        <div className='card-container' style={{ color: "white" }}>
          <Row className='mx-0'>
            <Button as={Col} variant='primary' style={{ marginRight: "20px" }}>
              Global
            </Button>
            <br />
            <Button as={Col} variant='success'>
              Friends
            </Button>
          </Row>
          <Table bordered style={{ color: "white" }}>
            <thead style={{ background: "#0d4386", color: "black" }}>
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
