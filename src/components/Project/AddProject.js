import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProject } from '../../actions/projectActions';
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';

function AddProject(props) {
  const { createProject, errors } = props;

  const [projectName, setProjectName] = useState('');
  const [projectId, setProjectId] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const navigator = useNavigate();
  const onChange = (key, value) => {
    if (key === 'projectName') {
      setProjectName(value);
    } else if (key === 'projectId') {
      setProjectId(value);
    } else if (key === 'description') {
      setDescription(value);
    } else if (key === 'startDate') {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const reqObj = {
      projectName,
      projectId,
      description,
      startDate,
      endDate,
    };

    try {
      await createProject(reqObj);
      // navigator('/dashboard');
    } catch {
      console.error('error');
    }
  };

  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">
              Create Project Form
            </h5>
            <hr />
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className={classnames(
                    'form-control form-control-lg',
                    { 'is-invalid': errors.projectName }
                  )}
                  placeholder="Project Name"
                  name="projectName"
                  value={projectName}
                  onChange={(e) =>
                    onChange(e.target.name, e.target.value)
                  }
                />
                {(
                  <div className="invalid-feedback">
                    {errors.projectName}
                  </div>
                ) || ''}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className={classnames(
                    'form-control form-control-lg',
                    { 'is-invalid': errors.projectName }
                  )}
                  placeholder="Unique Project ID"
                  name="projectId"
                  value={projectId}
                  onChange={(e) =>
                    onChange(e.target.name, e.target.value)
                  }
                />
                {(
                  <div className="invalid-feedback">
                    {errors.projectId}
                  </div>
                ) || ''}
              </div>
              <div className="mb-3">
                <textarea
                  className={classnames(
                    'form-control form-control-lg',
                    { 'is-invalid': errors.projectName }
                  )}
                  placeholder="Project Description"
                  name="description"
                  value={description}
                  onChange={(e) =>
                    onChange(e.target.name, e.target.value)
                  }
                ></textarea>
                {(
                  <div className="invalid-feedback">
                    {errors.description}
                  </div>
                ) || ''}
              </div>
              <h6>Start Date</h6>
              <div className="mb-3">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="startDate"
                  value={startDate}
                  onChange={(e) =>
                    onChange(e.target.name, e.target.value)
                  }
                />
              </div>
              <h6>Estimated End Date</h6>
              <div className="mb-3">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="endDate"
                  value={endDate}
                  onChange={(e) =>
                    onChange(e.target.name, e.target.value)
                  }
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

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createProject })(
  AddProject
);
