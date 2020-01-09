import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import Reducers from './reducers';

const exampleInitialState = {
  users: [{
    name: 'Steve',
    lastname: 'Jones'
  }]
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
