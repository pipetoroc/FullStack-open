import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () =>{
    setGood(good + 1)
  }
  const handleClickNeutral = () =>{
    setNeutral(neutral + 1)
  }
  const handleClickBad = () =>{
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button
        text="good"
        onClick={handleClickGood}
      />
      <Button
        text="neutral"
        onClick={handleClickNeutral}
      />
      <Button
        text="bad"
        onClick={handleClickBad}
      />
      <h2>Statics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  )
}

export default App