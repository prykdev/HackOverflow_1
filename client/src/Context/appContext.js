import React, { useReducer, useContext, useEffect } from "react"
import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from "./action"
import axios from "axios"
import reducer from "./reducer"

const token = localStorage.getItem("token")
const BASE_URL = "http://20.204.153.123:8082/"

const initialState = {
  token: token,
}

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

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
    dispatch({
      type: LOGIN_USER_BEGIN,
    })
    try {
      let { data } = await axios.post(`${BASE_URL}/login`, currentUser)
      data = JSON.parse(JSON.stringify(data))
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
    removeUserFromLocalStorage()
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        registerUser,
        loginUser,
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
