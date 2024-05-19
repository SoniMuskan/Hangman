import React from 'react';

interface LettersProps {
  guessedLetters: string[];
  handleGuess: (letter: string) => void;
}

const Letters: React.FC<LettersProps> = ({ guessedLetters, handleGuess }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="letters">
      {alphabet.map(letter => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Letters;
