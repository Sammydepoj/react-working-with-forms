import { useState } from "react";

const UseInputHook = (validateValue) => {
  const [enteredValue, setenteredValue] = useState("");
  const [isTouched, setisTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const inputValueChangeHandler = (event) => {
    setenteredValue(event.target.value);
  };
  const inputBlurHandler = () => {
    setisTouched(true);
  };
  const reset = () => {
    setenteredValue("");
    setisTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    inputValueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default UseInputHook;