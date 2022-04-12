import "./App.scss"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Landing from "./Pages/Landing/Landing"
import Profile from "./Pages/Profile/Profile"
import Leaderboard from "./Pages/Leaderboard/Leaderboard"
import Setting from "./Pages/Settings/Setting"
import ChangePassword from "./Pages/ChangePassword/ChangePassword"
import { Homepage } from "./Pages/Homepage/Homepage"
import Dashboard from "./Pages/Dashboard/Dashboard"
import About from "./Pages/About/About"
import SearchDashboard from "./Pages/SearchDashboard/SearchDashboard"
import Friends from "./Pages/Friends/Friends"
import "font-awesome/css/font-awesome.min.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/leaderboard' element={<Leaderboard />}></Route>
          <Route exact path='/' element={<Homepage />}></Route>
          <Route path='/settings' element={<Setting />}></Route>
          <Route path='/friends' element={<Friends />}></Route>
          <Route
            exact
            path='/changepassword'
            element={<ChangePassword />}
          ></Route>
          <Route exact path='/register' element={<Landing />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route
            exact
            path='/searchdashboard/:username'
            element={<SearchDashboard />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
