import React, { useState } from 'react';
import Word from './Word';
import Letters from './Letters';
import './styles.css';

const Hangman: React.FC = () => {
  const [word, setWord] = useState("REACT");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  const maxWrongGuesses = 6;

  const handleGuess = (letter: string) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  const isGameOver = wrongGuesses >= maxWrongGuesses;
  const isGameWon = word.split("").every(letter => guessedLetters.includes(letter));

  return (
    <div className="hangman">
      <h1>Hangman</h1>
      <Word word={word} guessedLetters={guessedLetters} />
      <Letters guessedLetters={guessedLetters} handleGuess={handleGuess} />
      <p>Wrong guesses: {wrongGuesses}</p>
      {isGameOver && <p>Game Over! The word was "{word}".</p>}
      {isGameWon && <p>Congratulations! You guessed the word.</p>}
    </div>
  );
};

export default Hangman;
