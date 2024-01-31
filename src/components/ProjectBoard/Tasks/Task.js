import React from 'react';

const Task = (props) => {
  const { data } = props;
  const { projectSequence, priority, acceptanceCriteria, summary } =
    data;
  const priorityString =
    priority === 1 ? 'High' : priority === 2 ? 'Median' : 'Low';

  const priorityClass =
    priority === 1
      ? 'bg-danger text-light'
      : priority === 2
      ? 'bg-warning text-light'
      : 'bg-info text-light';
  return (
    <div className="card mb-1 bg-light">
      <div className={`card-header text-primary ${priorityClass}`}>
        ID: {projectSequence} -- Priority: {priorityString}
      </div>
      <div className="card-body bg-light">
        <h5 className="card-title">{summary}</h5>
        <p className="card-text text-truncate ">
          {acceptanceCriteria}
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
