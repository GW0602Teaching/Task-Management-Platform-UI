import React, { useState } from 'react';
import { createNewUser } from '../../actions/securityActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const navigator = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      firstName,
      lastName,
      password,
      confirmedPassword,
    };

    const { createNewUser } = props;

    createNewUser(newUser, navigator);
  };

  const onChange = (e) => {
    const val = e.target.value;
    switch (e.target.name) {
      case 'username':
        setUsername(val);
        break;
      case 'firstName':
        setFirstName(val);
        break;
      case 'lastName':
        setLastName(val);
        break;
      case 'password':
        setPassword(val);
        break;
      case 'confirmedPassword':
        setConfirmedPassword(val);
        break;
      default:
        break;
    }
  };

  const { errors } = props;

  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your Account</p>
            <form onSubmit={onSubmit}>
              <div className="m-3">
                <input
                  type="text"
                  className={classnames(
                    'form-control form-control-lg',
                    { 'is-invalid': errors.username }
                  )}
                  placeholder="Email Address (Username)"
                  name="username"
                  value={username}
                  onChange={onChange}
                />
                {(
                  <div className="invalid-feedback">
                    {errors.username}
                  </div>
                ) || ''}
              </div>
              <div className="m-3">
                <input
                  type="text"
                  className={classnames(
                    'form-control form-control-lg',
                    { 'is-invalid': errors.firstName }
                  )}
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={onChange}
                />
                {(
                  <div className="invalid-feedback">
                    {errors.firstName}
                  </div>
                ) || ''}
              </div>
              <div className="m-3">
                <input
                  type="text"
                  className={classnames(
                    'form-control form-control-lg',
                    { 'is-invalid': errors.lastName }
                  )}
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={onChange}
                />
                {(
                  <div className="invalid-feedback">
                    {errors.lastName}
                  </div>
                ) || ''}
              </div>

              <div className="m-3">
                <input
                  type="password"
                  className={classnames(
                    'form-control form-control-lg',
                    { 'is-invalid': errors.password }
                  )}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
                {(
                  <div className="invalid-feedback">
                    {errors.password}
                  </div>
                ) || ''}
              </div>
              <div className="m-3">
                <input
                  type="password"
                  className={classnames(
                    'form-control form-control-lg',
                    { 'is-invalid': errors.confirmedPassword }
                  )}
                  placeholder="Confirm Password"
                  name="confirmedPassword"
                  value={confirmedPassword}
                  onChange={onChange}
                />
                {(
                  <div className="invalid-feedback">
                    {errors.confirmedPassword}
                  </div>
                ) || ''}
              </div>
              <input
                type="submit"
                className="btn btn-info btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createNewUser })(Register);
