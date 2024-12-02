import './keyboard.css'

const KEYS = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
  "u", "v", "w", "x", "y", "z"
];

export default function Keyboard() {
  return (
    <div className="keyboard-container">
      {KEYS.map((key) => (
        <button key={key} className="keyboard-key">
          {key.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
