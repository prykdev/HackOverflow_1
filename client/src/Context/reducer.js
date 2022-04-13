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
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_ERROR,
  GET_PENDING_REQ_BEGIN,
  GET_PENDING_REQ_SUCCESS,
  GET_FRIENDS_REQ_BEGIN,
  GET_FRIENDS_REQ_SUCCESS,
  GET_REQUESTS_REQ_BEGIN,
  GET_REQUESTS_REQ_SUCCESS,
  GET_CANCEL_REQ_BEGIN,
  GET_CANCEL_REQ_SUCCESS,
  GET_ACCEPT_REQ_BEGIN,
  GET_ACCEPT_REQ_SUCCESS,
  GET_UPVOTE_BEGIN,
  GET_UPVOTE_SUCCESS,
  GET_DOWNVOTE_BEGIN,
  GET_DOWNVOTE_SUCCESS,
  REMOVE_VOTE_BEGIN,
  REMOVE_VOTE_SUCCESS,
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
      isLogin: false,
      isRegister: true,
    }
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
    }
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLogin: false }
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      token: action.payload.token,
      isLogout: false,
      isLogin: true,
      isRegister: false,
    }
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      isLogin: false,
    }
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      token: null,
      isLogout: true,
      isLogin: false,
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
      loginUsername: action.payload.loginUsername,
      upvotes: action.payload.upvotes,
      downvotes: action.payload.downvotes,
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
      githubUsername: action.payload.githubUsername,
      public_repos: action.payload.public_repos,
      public_gists: action.payload.public_gists,
      followers: action.payload.followers,
      following: action.payload.following,
      organizations: action.payload.organizations,
      github_created_at: action.payload.github_created_at,
    }
  }
  if (action.type === GET_GITHUBDATA_ERROR) {
    return { ...state, isGithubError: true }
  }

  if (action.type === GET_HACKERRANKDATA_BEGIN) {
    return { ...state }
  }
  if (action.type === GET_HACKERRANKDATA_SUCCESS) {
    return {
      ...state,
      hackerrankUsername: action.payload.hackerrankUsername,
      hackerrank_created_at: action.payload.hackerrank_created_at,
      level: action.payload.level,
      followers_count: action.payload.followers_count,
      totalSubmissions: action.payload.totalSubmissions,
      totalBadges: action.payload.totalBadges,
      badgeData: action.payload.badgeData,
    }
  }
  if (action.type === GET_HACKERRANKDATA_ERROR) {
    return { ...state }
  }

  if (action.type === GET_CODECHEFDATA_BEGIN) {
    return { ...state }
  }
  if (action.type === GET_CODECHEFDATA_SUCCESS) {
    return {
      ...state,
      codechefUsername: action.payload.codechefUsername,
      ratings: action.payload.ratings,
      language: action.payload.language,
      band: action.payload.band,
      div: action.payload.div,
      global: action.payload.global,
      country: action.payload.country,
      submissionStats: action.payload.submissionStats,
    }
  }
  if (action.type === GET_CODECHEFDATA_ERROR) {
    return { ...state }
  }

  if (action.type === SEARCH_USER_BEGIN) {
    return { ...state }
  }
  if (action.type === SEARCH_USER_SUCCESS) {
    return {
      ...state,
      socials: action.payload.socials,
      name: action.payload.name,
      status: action.payload.status,
      upvotes: action.payload.upvotes,
      downvotes: action.payload.downvotes,
      voteStatus: action.payload.voteStatus,
    }
  }
  if (action.type === SEARCH_USER_ERROR) {
    return { ...state }
  }

  if (action.type === ADD_FRIEND_BEGIN) {
    return { ...state }
  }
  if (action.type === ADD_FRIEND_SUCCESS) {
    return { ...state, isAdd: true }
  }
  if (action.type === ADD_FRIEND_ERROR) {
    return { ...state }
  }

  if (action.type === GET_PENDING_REQ_BEGIN) {
    return {
      ...state,
    }
  }
  if (action.type === GET_PENDING_REQ_SUCCESS) {
    return {
      ...state,
      pending: action.payload.pending,
    }
  }

  if (action.type === GET_FRIENDS_REQ_BEGIN) {
    return {
      ...state,
    }
  }
  if (action.type === GET_FRIENDS_REQ_SUCCESS) {
    return {
      ...state,
      friends: action.payload.friends,
    }
  }

  if (action.type === GET_REQUESTS_REQ_BEGIN) {
    return {
      ...state,
    }
  }
  if (action.type === GET_REQUESTS_REQ_SUCCESS) {
    return {
      ...state,
      requests: action.payload.requests,
    }
  }
  if (action.type === GET_CANCEL_REQ_BEGIN) {
    return { ...state }
  }
  if (action.type === GET_CANCEL_REQ_SUCCESS) {
    return { ...state, isRemove: true }
  }
  if (action.type === GET_ACCEPT_REQ_BEGIN) {
    return { ...state }
  }
  if (action.type === GET_ACCEPT_REQ_SUCCESS) {
    return { ...state }
  }

  if (action.type === GET_UPVOTE_BEGIN) {
    return { ...state }
  }
  if (action.type === GET_UPVOTE_SUCCESS) {
    return { ...state, isUpVote: true }
  }
  if (action.type === GET_DOWNVOTE_BEGIN) {
    return { ...state }
  }
  if (action.type === GET_DOWNVOTE_SUCCESS) {
    return { ...state, isDownVote: true }
  }
  if (action.type === REMOVE_VOTE_BEGIN) {
    return { ...state }
  }
  if (action.type === REMOVE_VOTE_SUCCESS) {
    return { ...state }
  }
}

export default reducer
