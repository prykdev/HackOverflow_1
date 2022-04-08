import React, { useReducer, useContext, useEffect } from "react"
import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
} from "./action"
import axios from "axios"
import reducer from "./reducer"

const token = localStorage.getItem("token")
const BASE_URL = "http://localhost:8082"

const initialState = {
  token: token,
  data: "",
}

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const authFetch = axios.create({
    baseURL: "http://localhost:8082",
  })

  // response interceptor
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // response interceptor
  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      console.log(error.response)
      if (error.response.status === 401) {
        logoutUser()
        console.log("AUTH ERROR")
      }
      return Promise.reject(error)
    }
  )

  const addUserToLocalStorage = ({ token }) => {
    localStorage.setItem("token", token)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token")
  }

  const registerUser = async (currentUser) => {
    dispatch({
      type: REGISTER_USER_BEGIN,
    })
    try {
      let { data } = await axios.post(`${BASE_URL}/signup`, currentUser)
      data = JSON.parse(JSON.stringify(data))
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
          token: data.data.token,
        },
      })
      //local data storage
      addUserToLocalStorage({ token: data.data.token })
    } catch (error) {
      console.log(error)
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error },
      })
    }
  }

  const loginUser = async (currentUser) => {
    console.log("Ayushhhhhhhhhhhhhhh")
    dispatch({
      type: LOGIN_USER_BEGIN,
    })
    try {
      let { data } = await axios.post(`${BASE_URL}/login`, currentUser)
      console.log("hdffnwf")
      data = JSON.parse(JSON.stringify(data))
      console.log("ncsdncsd")
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
          token: data.data.token,
        },
      })
      console.log(data.data.token)
      //local data storage
      addUserToLocalStorage({ token: data.data.token })
    } catch (error) {
      console.log(error)
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error },
      })
    }
  }

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    console.log("Ayush")
    removeUserFromLocalStorage()
  }

  const getUser = async () => {
    dispatch({
      type: GET_USER_BEGIN,
    })

    try {
      let { data } = await authFetch("/profile")
      let { email, username, name, socials } = data.data
      let { github } = socials
      console.log(email)
      console.log(username)
      console.log(name)
      console.log(github)
      // console.log(data.data.socials.github)
      dispatch({
        type: GET_USER_SUCCESS,
        payload: {
          email,
          username,
          name,
          github,
        },
      })
    } catch (error) {
      console.log(error.response)
      logoutUser()
    }
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        registerUser,
        loginUser,
        logoutUser,
        getUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
