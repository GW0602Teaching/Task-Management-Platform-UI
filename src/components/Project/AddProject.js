import React, { Component } from 'react';

class AddProject extends Component {
  state = {
    projectName: '',
    projectId: '',
    description: '',
    startDate: '',
    endDate: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      projectName,
      projectId,
      description,
      startDate,
      endDate,
    } = this.state;

    const reqObj = {
      projectName,
      projectId,
      description,
      startDate,
      endDate,
    };

    console.log(reqObj);
  };

  render() {
    const {
      projectName,
      projectId,
      description,
      startDate,
      endDate,
    } = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">
                Create Project Form
              </h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Project Name"
                    name="projectName"
                    value={projectName}
                    onChange={this.onChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Unique Project ID"
                    name="projectId"
                    value={projectId}
                    onChange={this.onChange}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Project Description"
                    name="description"
                    value={description}
                    onChange={this.onChange}
                  ></textarea>
                </div>
                <h6>Start Date</h6>
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="startDate"
                    value={startDate}
                    onChange={this.onChange}
                  />
                </div>
                <h6>Estimated End Date</h6>
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="endDate"
                    value={endDate}
                    onChange={this.onChange}
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
}

export default AddProject;
