import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const pointArray = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0);
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(pointArray)
  const [mostPopular, setMostPopular] = useState(0)

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  // returns a random integer between the specified values. The value is no lower than min (or the next integer greater than min if min isn't an integer), and is less than 
  // (but not equal to) max. 
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  const setNextAnecdote = () => {
    const nextNumber = getRandomInt(0, anecdotes.length)
    setSelected(nextNumber)
  }

  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)

    const max = Math.max(...copy);
    const index = copy.indexOf(max);
    setMostPopular(index)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {points[selected]} votes
      </div>
      <Button handleClick={() => vote()} text={"vote"} />
      <Button handleClick={() => setNextAnecdote()} text={"next anecdote"} />
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[mostPopular]}</div>
      <div>has {points[mostPopular]} votes</div>
    </div>
  )
}

export default App
