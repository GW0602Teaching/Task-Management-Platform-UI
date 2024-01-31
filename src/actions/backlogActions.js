import axios from 'axios';
import { GET_BACKLOG, GET_ERRORS } from './types';

export const addTask = (projectId, task) => async (dispatch) => {
  try {
    await axios
      .post(`http://localhost:8080/api/backlog/${projectId}`, task)
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err?.response?.data || err?.config?.data,
        });
      });
  } catch (err) {
    console.log('error', err);
    dispatch({
      type: GET_ERRORS,
      payload: err?.response?.data || err?.config?.data,
    });
  }
};

export const getBacklog = (projectId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/backlog/${projectId}`
    );

    dispatch({
      type: GET_BACKLOG,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
