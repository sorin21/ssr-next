import axios from 'axios'

const URL = 'http://localhost:3000';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessage = (data) => {
  return async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify(data);
    try {
      const response = await axios.post(`${URL}/messages`, body, config);
      dispatch({
        type: SEND_MESSAGE,
        // response.data is the token
        payload: response.data
      });
    } catch (error) {
      // in error.response we have data and then
      // the errors array setup in backend with express-validator
      console.log('error: ', error)
    }
  };
}


export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';
export const clearMessage = () => dispatch => {
  return dispatch({
    type: CLEAR_MESSAGE,
    // will change from Done to null
    // the prop from server.js return response.json({ status: 'DONE' })
    // when we change the menu and we look to redux console
    payload: null
  });
};