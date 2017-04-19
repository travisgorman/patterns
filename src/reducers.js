import { SET_SEARCH_TERM } from './actions'

const DEFAULT_STATE = { searchTerm: '' }

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    searchTerm: action.searchTerm
  })
  return newState
}

// takes `state` and `action` and returns a new state
const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, { searchTerm: action.searchTerm })
  return newstate
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  // usually a big switch statement
  // not using combineReducer

  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
      return state
  }
}

export default rootReducer
