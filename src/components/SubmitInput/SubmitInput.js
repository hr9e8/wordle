import React, { useState } from "react";

/* 
  [X] Create a component for the input
  [X] Create react state to control input 
  [] Print out value when form is submitted in console log
  [X] Reset the input to empty string
  [X] Convert all user input to UPPERCASE
  [X] Input minimum and maximum length is 5. Use pattern attribute. 
  []
 */

function SubmitInput() {
  const [guess, setGuess] = useState("");
  const [submittedGuess, setSubmittedGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedGuess(guess);
    console.log({ guess });
    setGuess("");
  }
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          required
          title="Must be 5 letters."
          type="text"
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />{" "}
      </form>
    </>
  );
}

export default SubmitInput;
