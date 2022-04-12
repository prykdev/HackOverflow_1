import React, { useEffect } from "react"
import "./SearchDashboard.scss"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { Outlet, useParams, useLocation } from "react-router-dom"
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap"
import { Footer } from "../../Components/Footer/Footer.jsx"
import { useAppContext } from "../../Context/appContext"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Github from "../../Components/Github/Github"
import Hackerrank from "../../Components/Hackerrank/Hackerrank"
import CodeChef from "../../Components/CodeChef/CodeChef"

const SearchDashboard = () => {
  const {
    getGithub,
    getHackerrank,
    getCodechef,
    isGithubError,
    socials,
    searchUser,
  } = useAppContext()

  const location = useLocation()
  console.log(location)

  const username = location.pathname.split("/")[2]
  console.log(username)

  useEffect(async () => {
    await searchUser(username)
    await getGithub(socials.github)
    await getHackerrank(socials.hackerrank)
    await getCodechef(socials.codechef)
    if (isGithubError) {
      toast("Github API rate limit exceeded!!!")
    }
  }, [])

  return (
    <div className='dashboardHome'>
      <Outlet />
      <NavbarComponent />
      {/* <div class='container-fluid p-5'>
        <div class='col-sm-12 text-center'>
          <button class='btn btn-primary' title='Submit'></button>
          <button class='btn btn-warning' title='Cancel'></button>
          <button class='btn btn-warning' title='Cancel'></button>
        </div>
      </div> */}
      <Github />
      <Hackerrank />
      <CodeChef />

      {isGithubError ? <ToastContainer /> : <></>}
      <Footer />
    </div>
  )
}

export default SearchDashboard
