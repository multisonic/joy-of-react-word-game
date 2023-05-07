import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guesses }) {
  const guessesAllowed = NUM_OF_GUESSES_ALLOWED;
  return (
    <>
      <div className="guess-results">
        {range(guessesAllowed).map((rowIndex) => (
          <p className="guess" key={rowIndex}>
            <Guess guess={guesses[rowIndex]} />
          </p>
        ))}
      </div>
    </>
  );
}

export default GuessResults;
