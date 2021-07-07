import React, { useState } from "react";
// Page for add new challenge

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
  const [state, setState] = useState({
    name: "",
    description: "",
    error: {
      name: "",
    },
    nameValid: false,
    formValid: false,
  });

  const validateForm = () => {
    setState((prevState) => ({ formValid: prevState.nameValid, ...prevState }));
  };

  const validateField = (fieldName, value) => {
    let error = state.error;
    let nameValid = state.nameValid;
    switch (fieldName) {
      case "name":
        nameValid = nameValid.trim !== "";
        error.name = nameValid ? "" : "Challenge name should not be empty";
    }

    setState((prevState) => ({ error, nameValid, ...prevState }));
    validateForm();
  };

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.taregt.value;
    if ((name = "name")) {
      validateField(name, value);
    }
    setState((prevState) => ({ [name]: value, ...prevState }));
  };

  return (
    <>
      <h1> Add Your Own Challenge</h1>
      <div>
        <label htmlFor="name">Challenge Name*</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={(event) => handleUserInput(event)}
        />
        {error.name !== "" ?? <span>{error.name}</span>}
      </div>
      <div>
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          name="desc"
          value={state.description}
          placeholder="A quick summary of your challenge"
        />
      </div>
      <button type="submit" disabled={!state.formValid}>
        Next
      </button>
    </>
  );
};

export default NewChallenge;
