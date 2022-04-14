import React, { useEffect, useState } from "react"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { Outlet } from "react-router-dom"
import { Table, Row, Button, Col } from "react-bootstrap"
import { Footer } from "../../Components/Footer/Footer.jsx"
import { useAppContext } from "../../Context/appContext"

import "./Leaderboard.scss"

const Leaderboard = () => {
  const {
    getGlobalLeaderboard,
    globaldata,
    getFriendsLeaderboard,
    friendsdata,
  } = useAppContext()

  const [isGlobal, setIsGlobal] = useState(false)

  useEffect(async () => {
    await getGlobalLeaderboard()
    setIsGlobal(true)
    console.log(globaldata)
  }, [])

  const handleGlobal = (e) => {
    e.preventDefault()
    setIsGlobal(true)
    getGlobalLeaderboard()
  }

  const handleLocal = (e) => {
    e.preventDefault()
    setIsGlobal(false)
    getFriendsLeaderboard()
  }

  console.log(globaldata && globaldata[0])
  let count = 1

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
              className={isGlobal ? "active-btn" : "inactive-btn"}
              style={{ marginRight: "20px" }}
              onClick={handleGlobal}
            >
              Global
            </Button>
            <br />
            <Button
              as={Col}
              className={isGlobal ? "inactive-btn" : "active-btn"}
              onClick={handleLocal}
            >
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
              {isGlobal
                ? globaldata &&
                  globaldata.map((global, index) => (
                    <tr>
                      <td>{count++}</td>
                      <td>{global.name}</td>
                      <td>{global.rating}</td>
                    </tr>
                  ))
                : friendsdata &&
                  friendsdata.map((friend, index) => (
                    <tr>
                      <td>{count++}</td>
                      <td>{friend.name}</td>
                      <td>{friend.rating}</td>
                    </tr>
                  ))}
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Leaderboard
