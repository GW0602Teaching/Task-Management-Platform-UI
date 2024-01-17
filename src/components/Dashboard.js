import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './Project/ProjectItem';
import CreateProjectButton from './Project/CreateProjectButton';
import { connect } from 'react-redux';
import { getProjects } from '../actions/projectActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton />
              <br />
              <hr />
              <ProjectItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getProjects: PropTypes.func.isRequired,
  projectList: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  projectList: state.projectList,
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
