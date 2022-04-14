import React, { useReducer, useContext } from "react"
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
  ADD_FRIEND_BEGIN,
  GET_PENDING_REQ_BEGIN,
  GET_PENDING_REQ_SUCCESS,
  GET_CANCEL_REQ_BEGIN,
  GET_CANCEL_REQ_SUCCESS,
  GET_FRIENDS_REQ_BEGIN,
  GET_FRIENDS_REQ_SUCCESS,
  GET_REQUESTS_REQ_BEGIN,
  GET_REQUESTS_REQ_SUCCESS,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_ERROR,
  GET_ACCEPT_REQ_BEGIN,
  GET_ACCEPT_REQ_SUCCESS,
  GET_UPVOTE_BEGIN,
  GET_DOWNVOTE_BEGIN,
  GET_DOWNVOTE_SUCCESS,
  REMOVE_VOTE_BEGIN,
  REMOVE_VOTE_SUCCESS,
  GET_UPVOTE_SUCCESS,
  GET_GLOBAL_LEADERBOARD_SUCCESS,
  GET_GLOBAL_LEADERBOARD_BEGIN,
  GET_FRIEND_LEADERBOARD_SUCCESS,
  GET_FRIEND_LEADERBOARD_BEGIN,
} from "./action"
import axios from "axios"
import reducer from "./reducer"

const token = localStorage.getItem("token")
const loginUsername = localStorage.getItem("loginUsername")
const BASE_URL = "http://52.172.255.213:8082"

const initialState = {
  token: token,
  loginUsername: loginUsername,
  isGithubError: false,
  isAdd: false,
  isRemoved: false,
  isLogout: true,
  isLogin: false,
  isRegister: false,
  isUpVote: false,
  isDownVote: false,
}

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const authFetch = axios.create({
    baseURL: "http://52.172.255.213:8082",
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

  const addUserNameToLocalStorage = ({ loginUsername }) => {
    localStorage.setItem("loginUsername", loginUsername)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token")
    localStorage.clear()
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
      let { email, username, name, socials, upvotes, downvotes } = data.data
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
          upvotes,
          downvotes,
          loginUsername: username,
        },
      })
      addUserNameToLocalStorage({ loginUsername: username })
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

  const checkUsername = () => { }

  const getGithub = async (gusername) => {
    dispatch({
      type: GET_GITHUBDATA_BEGIN,
    })

    try {
      let { data } =
        gusername.length === 0
          ? await authFetch("/github")
          : await authFetch(`/github/${gusername}`)
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
        husername.length === 0
          ? await authFetch("/hackerrank")
          : await authFetch(`/hackerrank/${husername}`)
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
        cusername.length === 0
          ? await authFetch("/codechef")
          : await authFetch(`/codechef/${cusername}`)
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
      let { name, socials, status, upvotes, downvotes, voteStatus } = data.data
      if (status === "friends") status = "Remove Friend"
      else if (status === "requested") status = "Cancel Request"
      else if (status === "pending") status = "Accept Request"
      else status = "Add Friend"

      dispatch({
        type: SEARCH_USER_SUCCESS,
        payload: {
          name,
          socials,
          status,
          upvotes,
          downvotes,
          voteStatus,
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

  const addFriend = async (username) => {
    dispatch({
      type: ADD_FRIEND_BEGIN,
    })
    try {
      let { data } = await authFetch.get(`${BASE_URL}/addfriend/${username}`)

      dispatch({
        type: ADD_FRIEND_SUCCESS,
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: ADD_FRIEND_ERROR,
        payload: { msg: error },
      })
    }
  }

  const getPendingReq = async () => {
    dispatch({
      type: GET_PENDING_REQ_BEGIN,
    })

    try {
      let { data } = await authFetch.get(`${BASE_URL}/friends/pending`)
      let pending = data.data.friends
      dispatch({
        type: GET_PENDING_REQ_SUCCESS,
        payload: {
          pending,
        },
      })
    } catch (error) {
      console.log(error.response)
    }
  }

  const getCancelReq = async (username) => {
    dispatch({
      type: GET_CANCEL_REQ_BEGIN,
    })

    try {
      let { data } = await authFetch.delete(`${BASE_URL}/delete/${username}`)

      dispatch({
        type: GET_CANCEL_REQ_SUCCESS,
      })
    } catch (error) {
      console.log(error.response)
    }
  }

  const acceptReq = async (username) => {
    dispatch({
      type: GET_ACCEPT_REQ_BEGIN,
    })

    try {
      let { data } = await authFetch.get(`${BASE_URL}/acceptfriend/${username}`)

      dispatch({
        type: GET_ACCEPT_REQ_SUCCESS,
      })
    } catch (error) {
      console.log(error.response)
    }
  }

  const getFriendsReq = async () => {
    dispatch({
      type: GET_FRIENDS_REQ_BEGIN,
    })

    try {
      let { data } = await authFetch.get(`${BASE_URL}/friends/all`)
      let friends = data.data.friends

      dispatch({
        type: GET_FRIENDS_REQ_SUCCESS,
        payload: {
          friends,
        },
      })
    } catch (error) {
      console.log(error.response)
    }
  }

  const getRequestsReq = async () => {
    dispatch({
      type: GET_REQUESTS_REQ_BEGIN,
    })

    try {
      let { data } = await authFetch.get(`${BASE_URL}/friends/requests`)
      let requests = data.data.friends

      dispatch({
        type: GET_REQUESTS_REQ_SUCCESS,
        payload: {
          requests,
        },
      })
    } catch (error) {
      console.log(error.response)
    }
  }

  const getUpVote = async (username) => {
    dispatch({
      type: GET_UPVOTE_BEGIN,
    })

    try {
      let { data } = await authFetch.get(`${BASE_URL}/upvote/${username}`)

      dispatch({
        type: GET_UPVOTE_SUCCESS,
      })
    } catch (error) {
      console.log(error.response)
    }
  }

  const getDownVote = async (username) => {
    dispatch({
      type: GET_DOWNVOTE_BEGIN,
    })

    try {
      let { data } = await authFetch.get(`${BASE_URL}/downvote/${username}`)
      const { message } = data.data
      dispatch({
        type: GET_DOWNVOTE_SUCCESS,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const removeVote = async (username) => {
    dispatch({
      type: REMOVE_VOTE_BEGIN,
    })

    try {
      let { data } = await authFetch.get(`${BASE_URL}/removevote/${username}`)

      dispatch({
        type: REMOVE_VOTE_SUCCESS,
      })
    } catch (error) {
      console.log(error.response)
    }
  }
  const getGlobalLeaderboard = async () => {
    dispatch({
      type: GET_GLOBAL_LEADERBOARD_BEGIN,
    })
    try {
      let { data } = await axios.get(`${BASE_URL}/leaderboard/global`)
      let globaldata = data.data
      dispatch({
        type: GET_GLOBAL_LEADERBOARD_SUCCESS,
        payload: {
          globaldata,
        },
      })
    } catch (error) {
      console.log(error.response)
    }
  }

  const getFriendsLeaderboard = async () => {
    dispatch({
      type: GET_FRIEND_LEADERBOARD_BEGIN,
    })
    try {
      let { data } = await authFetch.get(`${BASE_URL}/leaderboard/friends`)
      let friendsdata = data.data
      dispatch({
        type: GET_FRIEND_LEADERBOARD_SUCCESS,
        payload: {
          friendsdata,
        },
      })
    } catch (error) {
      console.log(error.response)
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
        addFriend,
        getPendingReq,
        getCancelReq,
        getFriendsReq,
        getRequestsReq,
        acceptReq,
        getUpVote,
        getDownVote,
        removeVote,
        getGlobalLeaderboard,
        getFriendsLeaderboard,
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
