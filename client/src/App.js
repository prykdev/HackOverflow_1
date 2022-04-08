import "./App.scss"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Dashboard } from "./Pages"
import Landing from "./Pages/Landing/Landing"
import Profile from "./Pages/Profile/Profile"
import Leaderboard from "./Pages/Leaderboard/Leaderboard"
import Setting from "./Pages/Settings/Setting"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/leaderboard' element={<Leaderboard />}></Route>
          <Route path='/setting' element={<Setting />}></Route>

          <Route exact path='/' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
