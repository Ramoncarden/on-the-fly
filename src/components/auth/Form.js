import React, { useState } from 'react';
import SignUp from './Signup';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
  const [ isSubmitted, setIsSubmitted ] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="space-around">
      <div className="form-container font-ptSans">
        <span className="close-btn">x</span>
        <div className="form-content-left bg-kitchen-utensils bg-contain bg-center bg-no-repeat mx-2">
          <div className="form-img " />
        </div>
        {!isSubmitted ? <SignUp submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </div>
  );
};

export default Form;
