import React from "react";

function Banner({ gameResult, guessCount, answer }) {
  // const classes = (gameResult = "won" ? "happy banner" : "sad banner");
  return gameResult === "won" ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations! </strong>
        Got it in{" "}
        <strong>
          {guessCount} {guessCount > 1 ? "guesses" : "guess"}
        </strong>
        .
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>.
      </p>
    </div>
  );
}

export default Banner;
