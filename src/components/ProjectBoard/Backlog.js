import React from 'react';
import Task from './Tasks/Task';

const Backlog = (props) => {
  const { data } = props;
  const todoTasks =
    data?.filter(
      (item) => item && item.status && item.status === 'TO_DO'
    ) || [];

  const inProgressTasks =
    data?.filter(
      (item) => item && item.status && item.status === 'IN_PROGRESS'
    ) || [];

  const doneTasks =
    data?.filter(
      (item) => item && item.status && item.status === 'DONE'
    ) || [];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center mb-2">
            <div className="card-header bg-secondary text-white">
              <h3>TO DO</h3>
            </div>
          </div>
          {todoTasks.map((item) => (
            <Task data={item} />
          ))}
        </div>
        <div className="col-md-4">
          <div className="card text-center mb-2">
            <div className="card-header bg-primary text-white">
              <h3>In Progress</h3>
            </div>
          </div>
          {inProgressTasks.map((item) => (
            <Task data={item} />
          ))}
        </div>
        <div className="col-md-4">
          <div className="card text-center mb-2">
            <div className="card-header bg-success text-white">
              <h3>Done</h3>
            </div>
          </div>
          {doneTasks.map((item) => (
            <Task data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backlog;
