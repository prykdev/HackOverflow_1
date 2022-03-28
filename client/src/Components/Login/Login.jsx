import React, { useState, useEffect } from "react"
import "./Login.css"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../../Context/appContext"

const initialState = {
  username: "",
  password: "",
}

export const Login = () => {
  const [values, setValues] = useState(initialState)
  const navigate = useNavigate()
  const { token, loginUser } = useAppContext()
  const handleChange = (e) => {
    console.log(e.target)
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { username, password } = values
    const currentUser = { username, password }
    console.log(currentUser)
    console.log({ token })
    loginUser(currentUser)
    if (token) {
      navigate("/dashboard")
    }
  }

  return (
    <div className='loginBox text-center'>
      <form onSubmit={onSubmit}>
        <div className='inputBox'>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={values.username}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button className=' loginbtn' type='submit'>
          SIGNIN
        </button>
      </form>
    </div>
  )
}
