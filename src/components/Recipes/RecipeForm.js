import React, { useState } from 'react';
import NewRecipe from './NewRecipe';
import FormSuccess from '../auth/FormSuccess';
import './RecipeForm.css';

const RecipeForm = () => {
  const [ isSubmitted, setIsSubmitted ] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="border-t h-screen bg-form-background bg-cover bg-center bg-no-repeat">
      <div className="">
        <div className="form-container font-ptSans bg-green-50 text-black">
          {/* <div className="form-content-left bg-kitchen-utensils bg-contain bg-center bg-no-repeat mx-2">
          <div className="form-img " />
        </div> */}
          {!isSubmitted ? <NewRecipe submitForm={submitForm} /> : <FormSuccess />}
        </div>
      </div>
    </div>
  );
};

export default RecipeForm;
