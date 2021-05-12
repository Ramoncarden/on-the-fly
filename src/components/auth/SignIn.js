import React from 'react';
import useForm from '../../hooks/useForm';
import validate from './validateInfo';

const classes = {
  error: 'text-red-400'
};

const SignIn = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

  return (
    <div className="form-content-right h-screen">
      <form action="" className="form" onSubmit={handleSubmit}>
        <h1>Get started with us today! Create your account by filling out the information below</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p className={classes.error}>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className={classes.error}>{errors.password}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Submit
        </button>

        <span className="form-input-login">
          Need to create an account? Go
          <a href="/signup"> here</a>
        </span>
      </form>
    </div>
  );
};

export default SignIn;
