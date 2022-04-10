import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  GET_USER_SUCCESS,
  GET_USER_BEGIN,
  EDIT_SOCIALS_BEGIN,
  EDIT_SOCIALS_SUCCESS,
  EDIT_SOCIALS_ERROR,
  CHANGE_PW_BEGIN,
  CHANGE_PW_SUCCESS,
  CHANGE_PW_ERROR,
  GET_GITHUBDATA_BEGIN,
  GET_GITHUBDATA_SUCCESS,
  GET_GITHUBDATA_ERROR,
} from "./action"
import { initialState } from "./appContext"

const reducer = (state, action) => {
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state }
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      token: action.payload.token,
      data: action.payload.data,
    }
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
    }
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state }
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      token: action.payload.token,
      data: action.payload.data,
    }
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
    }
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,

      token: null,
    }
  }

  if (action.type === GET_USER_BEGIN) {
    return { ...state }
  }
  if (action.type === GET_USER_SUCCESS) {
    return {
      ...state,
      email: action.payload.email,
      username: action.payload.username,
      name: action.payload.name,
      github: action.payload.github,
      hackerrank: action.payload.hackerrank,
      codechef: action.payload.codechef,
    }
  }

  if (action.type === EDIT_SOCIALS_BEGIN) {
    return { ...state }
  }
  if (action.type === EDIT_SOCIALS_SUCCESS) {
    return { ...state }
  }
  if (action.type === EDIT_SOCIALS_ERROR) {
    return { ...state }
  }

  if (action.type === CHANGE_PW_BEGIN) {
    return { ...state }
  }
  if (action.type === CHANGE_PW_SUCCESS) {
    return { ...state, token: action.payload.token }
  }
  if (action.type === CHANGE_PW_ERROR) {
    return { ...state, isError: true }
  }

  if (action.type === GET_GITHUBDATA_BEGIN) {
    return { ...state }
  }
  if (action.type === GET_GITHUBDATA_SUCCESS) {
    return {
      ...state,
      graph: action.payload.graph,
      stats: action.payload.stats,
      mul: action.payload.mul,
      contributions: action.payload.contributions,
      username: action.payload.username,
      public_repos: action.payload.public_repos,
      public_gists: action.payload.public_gists,
      followers: action.payload.followers,
      following: action.payload.following,
      organizations: action.payload.organizations,
      created_at: action.payload.created_at,
    }
  }
  if (action.type === GET_GITHUBDATA_ERROR) {
    return { ...state }
  }
}

export default reducer
