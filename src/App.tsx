
import { useState } from 'react';
import './App.css';
import words from './data/words.json';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const inCorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));
  
  return (
    <div className="container">
    <div className='win-lose'>Lose Win</div>
    <HangmanDrawing numberOfGuesses={inCorrectLetters.length}/>
    <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
    <div className='keyboard-wrapper'>
      <Keyboard/>
    </div>
    </div>
  )
}

export default App
