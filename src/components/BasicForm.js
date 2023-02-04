import { useState } from "react";
import UseInputHook from "../hooks/basicForm-use-input";

const BasicForm = (props) => {
  const {
    value: nameInputValue,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputValueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = UseInputHook((value) => value.trim() !== "");

  const [lNameInput, setlNameInput] = useState("");
  const [lNameIsTouched, setlNameIsTouched] = useState(false);

  const [emailInput, setemailInput] = useState("");
  const [emailIsTouched, setemailIsTouched] = useState(false);

  const enteredlNameInputIsValid = lNameInput.trim() !== "";
  const lNameInputIsValid = !enteredlNameInputIsValid && lNameIsTouched;

  const enteredEmailIsValid = emailInput.includes("@");
  const emailIsValid = !enteredEmailIsValid && emailIsTouched;

  let formIsValid = false;

  if (nameInputValue && lNameInput && emailInput) {
    formIsValid = true;
  }

  const lastNameChangeHandler = (event) => {
    setlNameInput(event.target.value);
  };
  const lNameBlurHandler = () => {
    setlNameIsTouched(true);
  };

  const emailChangeHandler = (event) => {
    setemailInput(event.target.value);
  };
  const emailBlurHandler = () => {
    setemailIsTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // setNameValueTouched(true);
    if (!enteredNameIsValid) {
      return;
    }

    setlNameIsTouched(true);
    setemailIsTouched(true);

    if (!nameInputValue && !lNameInput && !emailInput) {
      return;
    }
    console.log(nameInputValue);
    console.log(lNameInput);
    console.log(emailInput);

    // setNameInputValue("");
    // setNameValueTouched(false);
    resetNameInput();
    setlNameInput("");
    setlNameIsTouched(false);
    setemailInput("");
    setemailIsTouched(false);
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lNameInputClasses = lNameInputIsValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={nameInputValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty!</p>
          )}
        </div>
        <div className={lNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameChangeHandler}
            value={lNameInput}
            onBlur={lNameBlurHandler}
          />
          {lNameInputIsValid && (
            <p className="error-text">Last name must not be empty!</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailInput}
        />
        {emailIsValid && (
          <p className="error-text">Email must contain the '@' symbol!</p>
        )}
      </div>

      {/* <div className={emailInputClasses}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          // onChange={emailChangeHandler}
          // onBlur={emailBlurHandler}
          // value={emailInput}
        />
        {emailIsValid && (
          <p className="error-text">Email must contain the '@' symbol!</p>
        )}
      </div> */}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default BasicForm;
