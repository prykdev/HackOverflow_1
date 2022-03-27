import React from "react"
import "./Login.css"
export const Login = () => {
  return (
    <div className='loginBox'>
      <form>
        <div className='inputBox'>
          <input type='text' name='Username' placeholder='Username' />
          <input type='password' name='Password' placeholder='Password' />
        </div>
        <input type='submit' name='Login' value='LOGIN' />
      </form>
    </div>
  )
}
