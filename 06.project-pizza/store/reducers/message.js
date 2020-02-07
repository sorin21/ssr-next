import { SEND_MESSAGE, CLEAR_MESSAGE } from '../actions'

const messagesReducer = (state = null, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        sentEmail: action.payload
      }
    case CLEAR_MESSAGE:
      return {
        ...state,
        sentEmail: action.payload
      }

    default:
      return state;
  }
}

export default messagesReducer;