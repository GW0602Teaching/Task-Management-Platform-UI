/* eslint-disable import/no-anonymous-default-export */

import { GET_PROJECT, GET_PROJECTS } from '../actions/types';

const initState = {
  projectList: [],
  project: {},
};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projectList: action.payload,
      };
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload, 
      };
    default:
      return state;
  }
}
