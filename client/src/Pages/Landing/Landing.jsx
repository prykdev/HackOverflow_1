import React, { useState } from 'react'
import { Login } from '../../Components/Login/Login';
import { Signup } from '../../Components/Signup/Signup';
import "./Landing.css";
const Landing = () => {
  const [isSignUp, setIsSignUp] = useState(true)
  return (
    <>
      <div className="landing">
        <div className="loginBox">
          <img className="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px" />
          <h3>Sign in here</h3>
        </div>
        <div className="text-center">
          <button onClick={() => setIsSignUp((cur) => !cur)}>{isSignUp ? "Already have an account? Sign in." : "Don't have an account? Sign up."}</button>

        </div>
        {isSignUp ? <Signup /> : <Login />}

      </div>
    </>
  )
}

export default Landing