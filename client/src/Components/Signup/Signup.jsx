import React, { useState, useEffect } from "react"
import "./Signup.scss"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../../Context/appContext"
const initialState = {
  username: "",
  name: "",
  email: "",
  password: "",
  github: "",
  hackerrank: "",
  codechef: "",
}

export const Signup = (props) => {
  const [values, setValues] = useState(initialState)
  const navigate = useNavigate()
  const { token, registerUser, isRegister } = useAppContext()
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const { username, name, email, password, github, hackerrank, codechef } =
      values
    const socials = { github, hackerrank, codechef }
    const currentUser = { username, name, email, password, socials }
    await registerUser(currentUser)
    props.passRegisterChildData(true)
  }

  useEffect(() => {
    setTimeout(() => {
      if (token) {
        navigate("/dashboard")
      }
    }, 2000)
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
            required
          />
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={values.name}
            onChange={handleChange}
            required
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
            required
          />
          <input
            type='text'
            name='github'
            placeholder='Github Username'
            value={values.github}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='hackerrank'
            placeholder='Hackerrank Username'
            value={values.hackerrank}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='codechef'
            placeholder='CodeChef Username'
            value={values.codechef}
            onChange={handleChange}
            required
          />
        </div>
        <button className=' signUpbtn' type='submit'>
          SIGNUP
        </button>
      </form>
    </div>
  )
}
