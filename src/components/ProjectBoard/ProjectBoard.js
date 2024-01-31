import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Backlog from './Backlog';
import { getBacklog } from '../../actions/backlogActions';

const ProjectBoard = (props) => {
  const params = useParams();
  const { id = '' } = params;

  useEffect(() => {
    const { getBacklog } = props;
    getBacklog(id);
  }, []);

  return (
    <div className="container">
      <Link to={`/addTask/${id}`} className="btn btn-primary mb-3">
        <i className="fas fa-plus-circle"> Create Project Task</i>
      </Link>
      <br />
      <hr />
      <Backlog data={props.backlog?.tasks || []} />
    </div>
  );
};

ProjectBoard.propTypes = {
  backlog: PropTypes.object.isRequired,
  getBacklog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  backlog: state.backlog,
});
export default connect(mapStateToProps, { getBacklog })(ProjectBoard);
