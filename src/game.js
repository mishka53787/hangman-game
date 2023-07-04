import React, { useState } from "react";

const Game = () => {
  const [word, setWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");

  const handleGuess = () => {
    setGuesses([...guesses, currentGuess]);
    setCurrentGuess("");
  };

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  return (
    <div>
      <h1>Hangman Game</h1>
      <p>Guess the word:</p>
      <input
        type="text"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <button onClick={handleGuess}>Guess</button>
      <div>
        {word.split("").map((letter, index) => (
          <span key={index}>
            {guesses.includes(letter) ? letter : "_"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
