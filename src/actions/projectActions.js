import axios from 'axios';
import { GET_ERRORS } from './types';

export const createProject = (project) => async (dispatch) => {
  try {
    const res = await axios.post(
      'http://localhost:8080/api/project',
      project
    );
  } catch (err) {
    console.log('error', err);
    dispatch({
      type: GET_ERRORS,
      payload: err?.response?.data,
    });
  }
};
