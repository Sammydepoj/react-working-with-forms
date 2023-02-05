import UseInputHook from "../hooks/basicForm-use-input";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = (props) => {
  const {
    value: nameInputValue,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputValueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = UseInputHook(isNotEmpty);

  const {
    value: lNameInput,
    isValid: enteredlNameInputIsValid,
    hasError: lNameInputHasError,
    inputValueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: resetLastNameInput,
  } = UseInputHook(isNotEmpty);

  const {
    value: emailInput,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputValueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = UseInputHook((value) => value.includes("@"));

  const {
    value: passwordInput,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    inputValueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = UseInputHook((value) => value.length > 6);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredlNameInputIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameInputValue && !lNameInput && !emailInput && !passwordInput) {
      return;
    }
    if (!formIsValid){
      return;
    }
    console.log(nameInputValue);
    console.log(lNameInput);
    console.log(emailInput);
    console.log(passwordInput);

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetPasswordInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lNameInputClasses = lNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  const passwordInputClasses = passwordInputHasError
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
          {lNameInputHasError && (
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
        {emailInputHasError && (
          <p className="error-text">Email must contain the '@' symbol!</p>
        )}
      </div>

      <div className={passwordInputClasses}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          value={passwordInput}
        />
        {passwordInputHasError && (
          <p className="error-text">
            Password Must be greater than 6 characters !
          </p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default BasicForm;
