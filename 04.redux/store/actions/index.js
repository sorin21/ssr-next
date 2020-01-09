import axios from 'axios'

export const GET_USERS = 'GET_USERS';
export const getUsers = () => dispatch => {
  const request = axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
  dispatch({
    type: GET_USERS,
    payload: request
  });
};
