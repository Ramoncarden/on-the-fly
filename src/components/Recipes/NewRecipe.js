import React, { Children } from 'react';
import useForm from '../../hooks/useForm';
import validate from '../auth/validateInfo';

const classes = {
  error: 'text-red-400'
};

const NewRecipe = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

  function createNewInput() {
    let inputBox = document.createElement('div');

    inputBox.innerHTML = `<input type='text' className='form-input' placeholder='Add ingredient' onChange={handleChange} name='ingredients'/>`;

    document.getElementById('input-container').appendChild(inputBox);
  }

  function removeInput() {
    let inputContainer = document.getElementById('input-container');

    if (inputContainer.childElementCount > 0) {
      inputContainer.removeChild(inputContainer.lastChild);
    }
  }

  return (
    <div className=" flex flex-col">
      <form action="" className="form border-2" onSubmit={handleSubmit}>
        <h1 className="text-green-400">Fill out the information below to submit a new recipe.</h1>
        <div className="form-inputs">
          <label htmlFor="recipe-name" className="form-label">
            Recipe Name
          </label>
          <input
            id="recipe-name"
            type="text"
            name="recipe-name"
            className="form-input"
            placeholder="name"
            value={values.recipe}
            onChange={handleChange}
          />
          {errors.username && <p className={classes.error}>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="serves" className="form-label">
            Serves
          </label>
          <select
            id="serves"
            type="number"
            name="serves"
            className="form-input"
            placeholder="serves"
            value={values.serves}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6+">6+</option>
          </select>
          {errors.email && <p className={classes.error}>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="preparation" className="form-label">
            Preparation Time
          </label>
          <input
            id="preparation"
            type="text"
            name="preparation"
            className="form-input"
            placeholder="Preparation Time"
            value={values.preparation}
            onChange={handleChange}
          />
          {errors.password && <p className={classes.error}>{errors.password}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="ingredients" className="form-label">
            Add ingredients
          </label>
          <div>
            {/* Add Button */}
            <input type="button" value="Add ingredient" сlassName="form-input-btn" onClick={createNewInput} />
            {/* Delete input button */}
            <input type="button" value="Remove ingredient" сlassName="form-input-btn" onClick={removeInput} />
          </div>

          <input
            id="ingredients"
            type="text"
            name="ingredients"
            className="form-input"
            placeholder="Add ingredient"
            value={values.ingredients}
            onChange={handleChange}
          />
          <div id="input-container" />
        </div>

        <div className="form-inputs">
          <label htmlFor="instructions" className="form-label">
            Preparation instructions
          </label>
          <textarea
            id="instructions"
            type="textarea"
            name="instructions"
            className="block"
            placeholder="List preparation instructions"
            value={values.instructions}
            onChange={handleChange}
            rows="8"
            cols="70"
          />
          {errors.username && <p className={classes.error}>{errors.username}</p>}
        </div>

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

export default NewRecipe;
