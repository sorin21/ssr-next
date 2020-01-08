import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise'

import Reducers from './reducers';

const store = (preloadedState = initialState) => {
  return createStore(
    Reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware(promiseMiddleware))
  )
}

export default store;