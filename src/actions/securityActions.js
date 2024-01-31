import axios from 'axios';
import { GET_ERRORS } from './types';

export const createNewUser =
  (newUser, callbackFuc) => async (dispatch) => {
    try {
      await axios
        .post('http://localhost:8080/api/users/register', newUser)
        .then(() => {
          callbackFuc('/login');
        })
        .catch((err) =>
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
          })
        );
    } catch (err) {
      console.log('error', err);
    }
  };
