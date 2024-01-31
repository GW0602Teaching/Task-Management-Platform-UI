import React from 'react';

const Task = (props) => {
  return (
    <div className="card mb-1 bg-light">
      <div className="card-header text-primary">
        ID: projectSequence -- Priority: priorityString
      </div>
      <div className="card-body bg-light">
        <h5 className="card-title">project_task.summary</h5>
        <p className="card-text text-truncate ">
          project_task.acceptanceCriteria
        </p>
        <a href="" className="btn btn-primary">
          View / Update
        </a>

        <button className="btn btn-danger ml-4">Delete</button>
      </div>
    </div>
  );
};

export default Task;
