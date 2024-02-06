import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { login } from '../../actions/securityActions';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigator = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const request = {
      username,
      password,
    };

    const { login } = props;

    login(request, navigator);
  };

  const onChange = (e) => {
    const val = e.target.value;
    switch (e.target.name) {
      case 'username':
        setUsername(val);
        break;
      case 'password':
        setPassword(val);
        break;
      default:
        break;
    }
  };

  const { errors } = props;

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <form onSubmit={onSubmit}>
              <div className="m-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  name="username"
                  value={username}
                  onChange={onChange}
                />
              </div>
              <div className="m-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
  errors: state.errors,
});

export default connect(mapStateToProps, { login })(Login);
