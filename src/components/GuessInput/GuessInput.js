import React from "react";

function GuessInput({ handleGuess }) {
  const [guess, setGuess] = React.useState("");
  function handleSubmit(event) {
    event.preventDefault();
    handleGuess(guess);

    setGuess("");
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          maxLength={5}
          pattern="^[a-zA-Z]{5,}\b$"
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
