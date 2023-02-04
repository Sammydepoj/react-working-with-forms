import { useState } from "react";

const BasicForm = (props) => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [nameValueTouched, setNameValueTouched] = useState(false);

  const [lNameInput, setlNameInput] = useState("");
  const [lNameIsTouched, setlNameIsTouched] = useState(false);

  const [emailInput, setemailInput] = useState("");
  const [emailIsTouched, setemailIsTouched] = useState(false);

  const enteredNameIsValid = nameInputValue.trim() !== "";
  const nameInputIsValid = !enteredNameIsValid && nameValueTouched;

  const enteredlNameInputIsValid = lNameInput.trim() !== "";
  const lNameInputIsValid = !enteredlNameInputIsValid && lNameIsTouched;

  const enteredEmailIsValid = emailInput.includes("@");
  const emailIsValid = !enteredEmailIsValid && emailIsTouched;

  let formIsValid = false;

  if (nameInputValue && lNameInput && emailInput) {
    formIsValid = true;
  }

  const nameInputHandler = (event) => {
    setNameInputValue(event.target.value);
  };
  const nameBlurHandler = (event) => {
    setNameValueTouched(true);
  };

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
    setNameValueTouched(true);
    setlNameIsTouched(true);
    setemailIsTouched(true);

    if (!nameInputValue && !lNameInput && !emailInput) {
      return;
    }
    console.log(nameInputValue);
    console.log(lNameInput);
    console.log(emailInput);

    setNameInputValue("");
    setNameValueTouched(false);
    setlNameInput("");
    setlNameIsTouched(false);
    setemailInput("");
    setemailIsTouched(false);
  };

  const nameInputClasses = nameInputIsValid
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
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={nameInputValue}
            onChange={nameInputHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputIsValid && (
            <p className="error-text">Name must not be empty!</p>
          )}
        </div>
        <div className={lNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
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
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailInput}
        />
        {emailIsValid && (
          <p className="error-text">Email must contain th '@' symbol!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default BasicForm;
