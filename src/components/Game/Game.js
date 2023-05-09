import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import Banner from "../Banner";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameResult, setGameResult] = React.useState("");

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    if (tentativeGuess === answer) {
      setGameResult("won");
      return;
    }
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameResult("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        disableInput={gameResult ? true : false}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameResult && (
        <Banner
          guessCount={guesses.length}
          gameResult={gameResult}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
