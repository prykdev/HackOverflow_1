import React from 'react'
import "./Signup.css"
export const Signup = () => {
  return (
    // <form>
    //   <div className="inputBox">
        // <input type="text" name="Username" placeholder="Username" />
        // <input type="text" name="name" placeholder="Name" />
        // <input type="email" name="email" placeholder="Email" />
        // <input type="password" name="Password" placeholder="Password" />
        // <input type="text" name="GitUsername" placeholder="Github Username" />

    //   </div>
    //   <input type="submit" name="" value="Submit" />
    // </form>



    <div className="Login">
      <div className="Login-card">
        <div className="Login-heading">
          <span className="Login-welcome">
            Welcome to<strong> Post IT </strong>
          </span>
          <span>
            <p>No Account ?</p>
            <a href="/register">Signup</a>
          </span>
         
        </div>
        <div className="Login-input">
          <h1>Sign in</h1>
          <form className='loginForm' >
            <label>Username</label>
            <input type="text" name="Username" placeholder="Username" />
            <br />
            <label> Name</label>
            <input type="text" name="name" placeholder="Name" />

            <label> Name</label>
            <input type="email" name="email" placeholder="Email" />

            <label> Password</label>
            <input type="password" name="Password" placeholder="Password" />

            <label> GitUsername</label>
            <input type="text" name="GitUsername" placeholder="Github Username" />

            <div className="Login-submit">
            <button type="submit" > Sign in</button>
          </div>
          </form>
        

        </div>
      </div>
    </div>


  )
}
