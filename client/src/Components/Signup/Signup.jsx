import React from "react"
import "./Signup.css"
export const Signup = () => {
  return (
    <div className='loginBox'>
      <form>
        <div className='inputBox'>
          <input type='text' name='Username' placeholder='Username' />
          <input type='text' name='name' placeholder='Name' />
          <input type='email' name='email' placeholder='Email' />
          <input type='password' name='Password' placeholder='Password' />
          <input type='text' name='GitUsername' placeholder='Github Username' />
        </div>
        <input type='submit' name='Signup' value='SIGN UP' />
      </form>
    </div>
  )
}
