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
  EDIT_SOCIALS_BEGIN,
  EDIT_SOCIALS_SUCCESS,
  EDIT_SOCIALS_ERROR,
  CHANGE_PW_BEGIN,
  CHANGE_PW_SUCCESS,
  CHANGE_PW_ERROR,
  GET_GITHUBDATA_ERROR,
  GET_GITHUBDATA_SUCCESS,
  GET_GITHUBDATA_BEGIN,
  GET_HACKERRANKDATA_BEGIN,
  GET_HACKERRANKDATA_SUCCESS,
  GET_HACKERRANKDATA_ERROR,
  GET_CODECHEFDATA_BEGIN,
  GET_CODECHEFDATA_SUCCESS,
  GET_CODECHEFDATA_ERROR,
  SEARCH_USER_BEGIN,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_ERROR,
} from "./action"
import axios from "axios"
import reducer from "./reducer"

const token = localStorage.getItem("token")
const BASE_URL = "http://localhost:8082"

const initialState = {
  token: token,
  data: "",
  isGithubError: false,
}

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const authFetch = axios.create({
    baseURL: "http://localhost:8082",
  })
  const config = {
    headers: { Authorization: `Bearer ${state.token}` },
  }

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

  const getUser = async () => {
    dispatch({
      type: GET_USER_BEGIN,
    })

    try {
      let { data } = await authFetch("/profile")
      let { email, username, name, socials } = data.data
      let { github, hackerrank, codechef } = socials
      dispatch({
        type: GET_USER_SUCCESS,
        payload: {
          email,
          username,
          name,
          github,
          hackerrank,
          codechef,
        },
      })
    } catch (error) {
      console.log(error.response)
    }
  }

  const editSocials = async (socials) => {
    dispatch({
      type: EDIT_SOCIALS_BEGIN,
    })

    try {
      let { data } = await authFetch.patch("/edit", socials)
      dispatch({
        type: EDIT_SOCIALS_SUCCESS,
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: EDIT_SOCIALS_ERROR,
        payload: { msg: error },
      })
    }
  }

  const changePassword = async (pwdetails) => {
    console.log(pwdetails)
    dispatch({
      type: CHANGE_PW_BEGIN,
    })

    try {
      let { data } = await axios.patch(
        `${BASE_URL}/password`,
        pwdetails,
        config
      )
      dispatch({
        type: CHANGE_PW_SUCCESS,
        payload: {
          token: data.data.token,
        },
      })
      addUserToLocalStorage({ token: data.data.token })
    } catch (error) {
      console.log(error)
      if (error.response.status === 401) {
        console.log("AUTH ERROR")
        dispatch({
          type: CHANGE_PW_ERROR,
          payload: { msg: error },
        })
      }
    }
  }

  const checkUsername = () => {}

  const getGithub = async (gusername) => {
    dispatch({
      type: GET_GITHUBDATA_BEGIN,
    })

    try {
      let { data } =
        gusername.length == 0
          ? await authFetch("/github")
          : await authFetch(`/github/${gusername}`)
      console.log(data.data)
      let {
        graph,
        stats,
        mul,
        contributions,
        githubUsername,
        public_repos,
        public_gists,
        followers,
        following,
        organizations,
        github_created_at,
      } = data.data

      dispatch({
        type: GET_GITHUBDATA_SUCCESS,
        payload: {
          graph,
          stats,
          mul,
          contributions,
          githubUsername,
          public_repos,
          public_gists,
          followers,
          following,
          organizations,
          github_created_at,
        },
      })
    } catch (error) {
      console.log(error.response)
      dispatch({
        type: GET_GITHUBDATA_ERROR,
        payload: { msg: error },
      })
    }
  }

  const getHackerrank = async (husername) => {
    dispatch({
      type: GET_HACKERRANKDATA_BEGIN,
    })

    try {
      let { data } =
        husername.length == 0
          ? await authFetch("/hackerrank")
          : await authFetch(`/hackerrank/${husername}`)
      console.log(data.data)
      let {
        hackerrankUsername,
        hackerrank_created_at,
        level,
        followers_count,
        totalSubmissions,
        totalBadges,
        badgeData,
      } = data.data
      dispatch({
        type: GET_HACKERRANKDATA_SUCCESS,
        payload: {
          hackerrankUsername,
          hackerrank_created_at,
          level,
          followers_count,
          totalSubmissions,
          totalBadges,
          badgeData,
        },
      })
    } catch (error) {
      console.log(error.response)
      dispatch({
        type: GET_HACKERRANKDATA_ERROR,
        payload: { msg: error },
      })
    }
  }

  const getCodechef = async (cusername) => {
    dispatch({
      type: GET_CODECHEFDATA_BEGIN,
    })

    try {
      let { data } =
        cusername.length == 0
          ? await authFetch("/codechef")
          : await authFetch(`/codechef/${cusername}`)
      console.log(data.data)
      let {
        codechefUsername,
        rankings,
        ratings,
        language,
        band,
        div,
        submissionStats,
      } = data.data
      let { global, country } = rankings
      console.log(submissionStats)

      dispatch({
        type: GET_CODECHEFDATA_SUCCESS,
        payload: {
          codechefUsername,
          ratings,
          language,
          band,
          div,
          global,
          country,
          submissionStats,
        },
      })
    } catch (error) {
      console.log(error.response)
      dispatch({
        type: GET_CODECHEFDATA_ERROR,
        payload: { msg: error },
      })
    }
  }

  const searchUser = async (username) => {
    dispatch({
      type: SEARCH_USER_BEGIN,
    })
    try {
      let { data } = await authFetch.post(`${BASE_URL}/search`, { username })
      const { socials } = data.data

      dispatch({
        type: SEARCH_USER_SUCCESS,
        payload: {
          socials,
        },
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: SEARCH_USER_ERROR,
        payload: { msg: error },
      })
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
        editSocials,
        changePassword,
        checkUsername,
        getGithub,
        getHackerrank,
        getCodechef,
        searchUser,
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
