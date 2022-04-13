import React, { useEffect } from "react"
import "./Dashboard.scss"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { Footer } from "../../Components/Footer/Footer.jsx"
import { useAppContext } from "../../Context/appContext"
import Github from "../../Components/Github/Github"
import Hackerrank from "../../Components/Hackerrank/Hackerrank"
import CodeChef from "../../Components/CodeChef/CodeChef"

const Dashboard = () => {
  return (
    <div className='dashboardHome'>
      <NavbarComponent />
      <Github username='' />
      <Hackerrank username='' />
      <CodeChef username='' />
      <Footer />
    </div>
  )
}

export default Dashboard
