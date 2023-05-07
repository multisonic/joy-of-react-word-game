import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <>
      {!guess
        ? range(5).map((index) => <span className="cell" key={index}></span>)
        : guess.split("").map((letter, letterIndex) => (
            <span className="cell" key={letterIndex}>
              {letter}
            </span>
          ))}
    </>
  );
}

export default Guess;
