import './hangman-word.css';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string 
}
export default function HangmanWord({guessedLetters, wordToGuess}: HangmanWordProps) {

  return (
    <div className="hangman-word-container">
      {wordToGuess.split('').map((letter, index) => (
        <span className="letter-wrapper" key={index}>
          <span className={guessedLetters.includes(letter) ? 'letter visible' : 'letter hidden'}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
