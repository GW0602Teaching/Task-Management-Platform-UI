import axios from 'axios';
import { GET_ERRORS, GET_PROJECT, GET_PROJECTS } from './types';

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
      payload: err?.response?.data || err?.config?.data,
    });
  }
};

export const getProjects = () => async (dispatch) => {
  const res = await axios.get(
    'http://localhost:8080/api/project/all'
  );
  dispatch({
    type: GET_PROJECTS,
    payload: res?.data || {},
  });
};

export const getProject = (id) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:8080/api/project/${id}`
  );
  dispatch({
    type: GET_PROJECT,
    payload: res?.data || {},
  });
};
