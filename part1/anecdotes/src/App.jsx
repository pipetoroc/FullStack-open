import { useState } from 'react'

const Button = ({text, onClick}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({})
  
  const generateAnecdote = () => {
    const random = Math.floor(Math.random()*anecdotes.length)
    setSelected(random)
    console.log(random)
  }

  const vote = () => {
    const copy = {...points}
    if(copy.hasOwnProperty(selected)){
      copy[selected] +=1
    } else{
      copy[selected] = 1
    }
    setPoints(copy)
    console.log(copy)
  }
  const maxVote = Math.max(...Object.values(points))
  const maxKey = Object.keys(points).find(key => points[key] === maxVote)

  return (
    <div>
      <Button
        text = 'Next anecdote'
        onClick = {generateAnecdote}
      />
      <Button
        text = 'Vote'
        onClick={vote}
      />
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected] ?? 0} votes</p>

      <h2>Anecdotes with most votes</h2>
      <p>{anecdotes[maxKey]}</p>
    </div>
  )
}

export default App