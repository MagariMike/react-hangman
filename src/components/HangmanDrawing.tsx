import './hangman-drawing.css'
// import body from '../data/body.json';

const HEAD = (
	<div className='head'/>
)

const BODY = (
	<div className='body'/>
)

const RIGHT_ARM = (
	<div className='right-arm'/>
)

const LEFT_ARM = (
	<div className='left-arm'/>
)

const RIGHT_LEG = (
	<div className='right-leg'/>
)

const LEFT_LEG = (
	<div className='left-leg'/>
)

const BODY_PARTS = [BODY, HEAD, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
	numberOfGuesses: number
}

export default function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {
  return (
	<div className="hangman-drawing-container">
		{BODY_PARTS.slice(0, numberOfGuesses)}
		<div className='top-drop-bar'/>
		<div className='top-bar'/>
		<div className='upright-bar'/>
		<div className='bottom-bar'/>
	</div>
  )
}
