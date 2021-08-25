import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import useForm from '../../hooks/useForm';
import validate from './validateInfo';
import Alert from './common/Alert';

const classes = {
  error: 'text-red-400'
};

/**  
 * Signup Form
 * On submission:
 * -calls signup function prop
 * -redirects to /home route
 * 
 * Routes -> SignupForm
*/

const SignupForm = ({ signup }) => {
  // const { handleChange, values, errors } = useForm(validate);
  const history = useHistory();
  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  const [ formErrors, setFormErrors ] = useState([]);

  console.debug('SignupForm', 'signup=', typeof signup, 'formData=', formData, 'formErrors', formErrors);

  /**
   * Handle form submit
   * 
   * Calls login func prop and, if successfull, redirects to /home.
   * 
   */
  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      history.push('/home');
    } else {
      setFormErrors(result.errors);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  // TODO: save api response, save in local storage

  return (
    <div className="form-content-right">
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
            value={formData.username}
            onChange={handleChange}
          />
          {/* {errors.username && <p className={classes.error}>{errors.username}</p>} */}
        </div>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
          {/* {errors.email && <p className={classes.error}>{errors.email}</p>} */}
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
            value={formData.password}
            onChange={handleChange}
          />
          {/* {errors.password && <p className={classes.error}>{errors.password}</p>} */}
        </div>

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm your password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="password"
            value={formData.password2}
            onChange={handleChange}
          />
          {/* {errors.password2 0-&& <p className={classes.error}>{errors.password2}</p>} */}
        </div>
        {formErrors.length ? <Alert type="danger" messages={formErrors} /> : null}

        <button className="form-input-btn" type="submit">
          Submit
        </button>

        <span className="form-input-login">
          Already have an account? Login
          <a href="/login"> here</a>
        </span>
      </form>
    </div>
  );
};

export default SignupForm;
