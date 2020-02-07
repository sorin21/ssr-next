import { combineReducers } from 'redux';

import messageReducer from './message';

const reducers = combineReducers({
  messages: messageReducer
});

export default reducers;