import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk';


import Reducers from './reducers';

// const initialState = {};
const middleware = [thunk];

const store = (initialState = {}) => {
  return createStore(
    Reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
}

export default store;