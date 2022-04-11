import React, { useEffect } from "react"
import "./SearchDashboard.scss"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { Outlet } from "react-router-dom"
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap"
import { Footer } from "../../Components/Footer/Footer.jsx"
import { useAppContext } from "../../Context/appContext"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Github from "../../Components/Github/Github"
import Hackerrank from "../../Components/Hackerrank/Hackerrank"
import CodeChef from "../../Components/CodeChef/CodeChef"

const SearchDashboard = () => {
  const { getGithub, getHackerrank, getCodechef, isGithubError } =
    useAppContext()

  useEffect(async () => {
    await getGithub()
    await getHackerrank()
    await getCodechef()
    if (isGithubError) {
      toast("Github API rate limit exceeded!!!")
    }
  }, [])

  return (
    <div className='dashboardHome'>
      <Outlet />
      <NavbarComponent />
      <Github />
      <Hackerrank />
      <CodeChef />

      {isGithubError ? <ToastContainer /> : <></>}
      <Footer />
    </div>
  )
}

export default SearchDashboard
