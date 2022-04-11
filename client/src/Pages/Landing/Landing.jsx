import React, { useState } from "react"
import { Login } from "../../Components/Login/Login"
import { Signup } from "../../Components/Signup/Signup"
import "./Landing.scss"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { useLocation } from "react-router-dom"

const Landing = () => {
  const [isSignUp, setIsSignUp] = useState(true)
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <>
      <div className='landing-home'>
        <NavbarComponent pathname={pathname} />
        <div className='landing'>
          <div className='loginBoxabc'>
            <img
              className='userabc'
              src='https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png'
              height='100px'
              width='100px'
            />
            <h3> {!isSignUp ? "LOGIN" : "SIGN-UP"}</h3>
            {isSignUp ? <Signup /> : <Login />}
            <div
              className='toggleText'
              onClick={() => setIsSignUp((cur) => !cur)}
            >
              {isSignUp
                ? "Already have an account? Login"
                : "Don't have an account? Sign up"}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
