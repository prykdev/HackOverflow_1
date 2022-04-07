import React, { useState, useEffect } from "react"
import "./Signup.css"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../../Context/appContext"
const initialState = {
  username: "",
  name: "",
  email: "",
  password: "",
  github: "",
}

export const Signup = () => {
  const [values, setValues] = useState(initialState)
  const navigate = useNavigate()
  const { token, registerUser } = useAppContext()
  const handleChange = (e) => {
    console.log(e.target)
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { username, name, email, password, github } = values
    const socials = { github }
    const currentUser = { username, name, email, password, socials }
    console.log(currentUser)
    registerUser(currentUser)
  }

  useEffect(() => {
    if (token) {
      setTimeout(() => {
        navigate("/dashboard")
      }, 1000)
    }
  }, [token, navigate])
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
            type='text'
            name='name'
            placeholder='Name'
            value={values.name}
            onChange={handleChange}
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={values.email}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={values.password}
            onChange={handleChange}
          />
          <input
            type='text'
            name='github'
            placeholder='Github Username'
            value={values.github}
            onChange={handleChange}
          />
        </div>
        <button className=' signUpbtn' type='submit'>
          SIGNUP
        </button>
      </form>
    </div>
  )
}
