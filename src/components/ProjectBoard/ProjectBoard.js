import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Backlog from './Backlog';

const ProjectBoard = () => {
  const params = useParams();
  const { id = '' } = params;

  return (
    <div className="container">
      <Link to={`/addTask/${id}`} className="btn btn-primary mb-3">
        <i className="fas fa-plus-circle"> Create Project Task</i>
      </Link>
      <br />
      <hr />
      <Backlog />
    </div>
  );
};

export default ProjectBoard;
