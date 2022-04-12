import React, { useEffect } from "react"
import "./SearchDashboard.scss"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "../../Components/Footer/Footer.jsx"
import { useAppContext } from "../../Context/appContext"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Github from "../../Components/Github/Github"
import Hackerrank from "../../Components/Hackerrank/Hackerrank"
import CodeChef from "../../Components/CodeChef/CodeChef"
import "font-awesome/css/font-awesome.min.css"

const SearchDashboard = () => {
  const { isGithubError, socials, searchUser, addFriend, isAdd } =
    useAppContext()

  const location = useLocation()
  console.log(location)

  const username = location.pathname.split("/")[2]
  console.log(username)

  useEffect(async () => {
    console.log("useeffect")
    await searchUser(username)
    if (isGithubError) {
      toast("Github API rate limit exceeded!!!")
    }
  }, [username])

  const handleAddFriend = async (e) => {
    e.preventDefault()
    console.log(username + "fdfdfewfewgfewgwegweSGVR")
    await addFriend(username)
  }

  return (
    <div className='dashboardHome'>
      <NavbarComponent />
      <div className='container-fluid mt-5'>
        <div className='col-lg-12 col-sm-6 text-center d-flex justify-content-center gap-4'>
          <button className='btn btn-up p-3' title='UpVote'>
            <i className='fa fa-thumbs-up fa-lg '></i>
          </button>
          <button className='btn btn-down  p-3' title='DownVote'>
            <i className='fa fa-thumbs-down fa-lg'></i>
          </button>
          <button
            className='btn btn-add  p-3'
            title='Add Friend'
            type='button'
            onClick={handleAddFriend}
          >
            <i className='fa fa-user-plus fa-lg'></i>
          </button>
        </div>
      </div>
      <Github username={socials && socials.github} />
      <Hackerrank username={socials && socials.hackerrank} />
      <CodeChef username={socials && socials.codechef} />

      {/* {isGithubError ? <ToastContainer /> : <></>} */}
      <Footer />
    </div>
  )
}

export default SearchDashboard
