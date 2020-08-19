import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk]


const store = isDev => {
  if(isDev) {
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
    )
  }
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  )
}

export default store
