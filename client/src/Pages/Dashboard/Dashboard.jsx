import React, { useEffect } from "react"
import "./Dashboard.scss"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { Footer } from "../../Components/Footer/Footer.jsx"
import { useAppContext } from "../../Context/appContext"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Github from "../../Components/Github/Github"
import Hackerrank from "../../Components/Hackerrank/Hackerrank"
import CodeChef from "../../Components/CodeChef/CodeChef"

const Dashboard = () => {
  const { isGithubError } = useAppContext()

  useEffect(async () => {
    if (isGithubError) {
      toast("Github API rate limit exceeded!!!")
    }
  }, [])

  return (
    <div className='dashboardHome'>
      <NavbarComponent />
      <Github username=""/>
      <Hackerrank username=""/>
      <CodeChef username=""/>

      {isGithubError ? <ToastContainer /> : <></>}
      <Footer />
    </div>
  )
}

export default Dashboard
