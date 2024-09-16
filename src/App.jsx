import React, { useState } from 'react';
import './App.css';  // We'll style it later

function App() {
  const [targetNumber] = useState(Math.floor(Math.random() * 100) + 1); // Random number between 1 and 100
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [tries, setTries] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleGuess = (e) => {
    e.preventDefault();
    const userGuess = parseInt(guess, 10);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      setMessage('Please enter a number between 1 and 100.');
      return;
    }

    setTries(tries + 1);

    if (userGuess === targetNumber) {
      setMessage(`🎉 Correct! You guessed the number in ${tries + 1} tries.`);
      setIsGameOver(true);
    } else if (userGuess < targetNumber) {
      setMessage('📉 Too low! Try again.');
    } else {
      setMessage('📈 Too high! Try again.');
    }

    setGuess('');
  };

  const resetGame = () => {
    window.location.reload(); // Simple reload to reset the game
  };

  return (
    <div className="container">
      <h1>Number Guessing Game</h1>
      <p>I'm thinking of a number between 1 and 100. Can you guess it?</p>

      {isGameOver ? (
        <button onClick={resetGame} className="reset-btn">Play Again</button>
      ) : (
        <form onSubmit={handleGuess} className="guess-form">
          <input 
            type="number" 
            value={guess} 
            onChange={(e) => setGuess(e.target.value)} 
            placeholder="Enter your guess" 
            className="input-field"
          />
          <button type="submit" className="submit-btn">Submit Guess</button>
        </form>
      )}

      {message && <h2 className="message">{message}</h2>}
      <p className="tries">Tries: {tries}</p>
    </div>
  );
}

export default App;
