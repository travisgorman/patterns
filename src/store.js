import { createStore, compose } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer, compose(
  typeof window === 'object' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
      window.devToolsExtension() : (f) => f
))

export default store
