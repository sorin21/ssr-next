import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk';


import Reducers from './reducers';

const exampleInitialState = {
  user: []
}
// const initialState = {};
const middleware = [thunk];

const store = (initialState = exampleInitialState) => {
  return createStore(
    Reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
}

export default store;