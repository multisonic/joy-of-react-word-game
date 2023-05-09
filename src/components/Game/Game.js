import React from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import { sample } from "../../utils";
import { WORDS } from "../../data";

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
    if (nextGuesses.length === 6) {
      setGameResult("lost");
    }
  }
  // if (!gameResult && (guesses.length = 6)) {
  //   setGameResult("lost");
  // }
  console.log({ gameResult });
  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
        setGameResult={setGameResult}
      />
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
