import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { addTask } from '../../../actions/backlogActions';
import { useNavigate } from 'react-router-dom';

const AddTask = (props) => {
  const params = useParams();
  const { id = '' } = params;

  const [summary, setSummary] = useState('');
  const [acceptanceCriteria, setAcceptanceCriteria] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState(0);
  const [dueDate, setDueDate] = useState('');
  // const [errors, setErrors] = useState({});

  const navigator = useNavigate();

  function onChange(e) {
    switch (e.target.name) {
      case 'summary':
        setSummary(e.target.value);
        break;
      case 'acceptanceCriteria':
        setAcceptanceCriteria(e.target.value);
        break;
      case 'status':
        setStatus(e.target.value);
        break;
      case 'priority':
        setPriority(e.target.value);
        break;
      case 'dueDate':
        setDueDate(e.target.value);
        break;
      default:
        // setErrors(e.target.value);
        break;
    }
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newTask = {
      summary,
      acceptanceCriteria,
      status,
      priority,
      dueDate,
    };

    const { addTask } = props;
    await addTask(id, newTask);
    // navigator(`/projectBoard/${id}`)
  }

  const { errors } = props;

  return (
    <div className="add-PBI">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link
              to={`/projectBoard/${id}`}
              className="btn btn-light"
            >
              Back to Project Board
            </Link>
            <h4 className="display-4 text-center">
              Add Project Task
            </h4>
            <p className="lead text-center">
              Project Name + Project Code
            </p>
            <form onSubmit={onSubmit}>
              <div className="m-3">
                <input
                  type="text"
                  className={classnames(
                    'form-control form-control-lg',
                    { 'is-invalid': errors.summary }
                  )}
                  name="summary"
                  placeholder="Project Task summary"
                  value={summary}
                  onChange={onChange}
                />
                {(
                  <div className="invalid-feedback">
                    {errors.summary}
                  </div>
                ) || ''}
              </div>
              <div className="m-3">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Acceptance Criteria"
                  name="acceptanceCriteria"
                  value={acceptanceCriteria}
                  onChange={onChange}
                />
              </div>
              <h6>Due Date</h6>
              <div className="m-3">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="dueDate"
                  value={dueDate}
                  onChange={onChange}
                />
              </div>
              <div className="m-3">
                <select
                  className="form-control form-control-lg"
                  name="priority"
                  value={priority}
                  onChange={onChange}
                >
                  <option value={0}>Select Priority</option>
                  <option value={1}>High</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Low</option>
                </select>
              </div>

              <div className="m-3">
                <select
                  className="form-control form-control-lg"
                  name="status"
                  value={status}
                  onChange={onChange}
                >
                  <option value="">Select Status</option>
                  <option value="TO_DO">TO DO</option>
                  <option value="IN_PROGRESS">IN PROGRESS</option>
                  <option value="DONE">DONE</option>
                </select>
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
};

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { addTask })(AddTask);
