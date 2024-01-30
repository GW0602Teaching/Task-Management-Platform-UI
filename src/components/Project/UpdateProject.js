/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProject } from '../../actions/projectActions';

function UpdateProject(props) {
  const params = useParams();

  useEffect(() => {
    const { id = '' } = params;
    const { getProject } = props;
    getProject(id);
  }, []);

  const { project } = props;

  return (
    <div className="project">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">
              Update Project form
            </h5>
            <hr />
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg "
                  placeholder="Project Name"
                  value={project.projectName || ''}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Unique Project ID"
                  value={project.projectId || ''}
                  disabled
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Project Description"
                  value={project.description || ''}
                />
              </div>
              <h6>Start Date</h6>
              <div className="mb-3">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="start_date"
                  value={project.startDate || ''}
                />
              </div>
              <h6>Estimated End Date</h6>
              <div className="mb-3">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="end_date"
                  value={project.endDate || ''}
                />
              </div>

              <input
                type="submit"
                className="btn btn-primary btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project.project,
});

export default connect(mapStateToProps, { getProject })(
  UpdateProject
);
