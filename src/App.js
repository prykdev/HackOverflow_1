
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Landing from "./Pages/Landing/Landing"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Profile from "./Pages/Profile/Profile"
import Leaderboard from "./Pages/Leaderboard/Leaderboard"
import Setting from "./Pages/Settings/Setting"

function  App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Landing/>}></Route>
          <Route path="/dashboard" element={ <Dashboard/>}></Route>
          <Route path="/profile" element={ <Profile/>}></Route>
          <Route path="/leaderboard" element={ <Leaderboard/>}></Route>
          <Route path="/setting" element={ <Setting/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
