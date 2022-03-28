import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
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
      data: action.payload.user,
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
      data: action.payload.user,
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
}

export default reducer
