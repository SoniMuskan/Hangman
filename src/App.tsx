import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hangman from './Hangman';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hangman />
    </div>
  );
};

export default App;
