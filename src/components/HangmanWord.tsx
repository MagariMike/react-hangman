import './hangman-word.css';

export default function HangmanWord() {
  const word = 'test';
  const guessedLetters = ['t', 'e'];

  return (
    <div className="hangman-word-container">
      {word.split('').map((letter, index) => (
        <span className="letter-wrapper" key={index}>
          <span className={guessedLetters.includes(letter) ? 'letter visible' : 'letter hidden'}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
