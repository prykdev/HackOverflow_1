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
    }
  }
}

export default reducer
