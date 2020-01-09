import { GET_USERS } from '../actions'

const usersReducer = (state = null, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        user: action.payload
      }

    default:
      return state;
  }
}

export default usersReducer;