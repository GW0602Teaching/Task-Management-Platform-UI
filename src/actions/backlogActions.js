import axios from 'axios';

export const addTask = (projectId, task) => async (dispatch) => {
  await axios.post(
    `http://localhost:8080/api/backlog/${projectId}`,
    task
  );
};
