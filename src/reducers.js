const DEFAULT_STATE = {
  searchTerm: ''
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  // usually a big switch statement
  // not using combineReducer

  switch (action.type) {
    // every action must have a type
    default:
      return state
  }
}

export default rootReducer
