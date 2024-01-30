/* eslint-disable import/no-anonymous-default-export */
import { DELETE_TASK, GET_BACKLOG, GET_TASK } from '../actions/types';

const initState = {
  tasks: [],
  task: {},
};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_BACKLOG:
      return {
        ...state,
        tasks: action.payload,
      };

    case GET_TASK:
      return {
        ...state,
        task: action.payload,
      };

    case DELETE_TASK:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
}
