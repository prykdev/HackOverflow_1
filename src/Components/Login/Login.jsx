import React from 'react'
import "./Login.css"
export const Login = () => {
  return (
    <form>
      <div className="inputBox">
        <input type="text" name="Username" placeholder="Username" />
        <input type="password" name="Password" placeholder="Password" />

      </div>
      <input type="submit" name="" value="Submit" />
    </form>
  )
}
