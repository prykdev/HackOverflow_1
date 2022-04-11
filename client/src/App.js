import "./App.scss"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Landing from "./Pages/Landing/Landing"
import Profile from "./Pages/Profile/Profile"
import Leaderboard from "./Pages/Leaderboard/Leaderboard"
import Setting from "./Pages/Settings/Setting"
import ChangePassword from "./Pages/ChangePassword/ChangePassword"
import { Homepage } from "./Pages/Homepage/Homepage"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Search from "./Pages/Search/Search"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/leaderboard' element={<Leaderboard />}></Route>
          <Route exact path='/' element={<Homepage />}></Route>
          <Route path='/settings' element={<Setting />}></Route>
          <Route exact path='/changepw' element={<ChangePassword />}></Route>
          <Route exact path='/register' element={<Landing />}></Route>
          <Route exact path='/search' element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
