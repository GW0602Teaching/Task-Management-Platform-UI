import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setJWTToken from '../securityUtils/setJWTToken';
import { jwtDecode } from 'jwt-decode';

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

export const login =
  (LoginRequest, callbackFuc) => async (dispatch) => {
    try {
      await axios
        .post('http://localhost:8080/api/users/login', LoginRequest)
        .then((res) => {
          console.log(res);
          const { token } = res.data;
          localStorage.setItem('jwtToken', token);
          setJWTToken(token);
          const decodedRes = jwtDecode(token);
          dispatch({
            type: SET_CURRENT_USER,
            payload: decodedRes,
          });
          callbackFuc('/dashboard');
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
          });
        });
    } catch (err) {
      console.error(err);
    }
  };
