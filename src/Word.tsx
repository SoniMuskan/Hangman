import React from 'react';

interface WordProps {
  word: string;
  guessedLetters: string[];
}

const Word: React.FC<WordProps> = ({ word, guessedLetters }) => {
  return (
    <div className="word">
      {word.split("").map((letter, index) => (
        <span key={index} className="letter">
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

export default Word;
