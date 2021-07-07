import React, { useState } from "react";
// Page for add new challenge

// props => JSX
// return an input field with validation rule
// example: if props.required  true, value should not be empty
// props
// - required: boolean value to set if this is required
// - error: error received from the submit validate step
const InputField = ({ required, ...props }) => {
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const validateValue = () => {
    if (required && value.trim === "") {
      setError("This field is empty!");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    validateValue();
  };

  return (
    <>
      <label
        className={required ? `option-input` : `required-input`}
        {...props}
        for={props.title}
      >
        {props.title}
      </label>
      <input
        name={props.title}
        className={
          value !== null ? "input" : error ? `error-input` : `correct-input`
        }
        type="text"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

// void -> JSX
// return a JSX object for NewChallenge Page
// component include:
// - Input for challenge Name
// - Input for challenge description / rules
// - Optional Input for Challenge deadline
// - Submit button for New Challenge validation and then submit

// component state
// - new state, no validation
// - validation of input
// - validation error
const NewChallenge = () => {
  return <>This is the page for new challenge</>;
};

export default NewChallenge;
