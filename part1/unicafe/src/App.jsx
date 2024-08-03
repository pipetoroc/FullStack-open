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

  let all = good + neutral + bad

  let average = null
  if(all !== 0){
    average = (((good) + (neutral * 0) + (bad * -1))/all)
  }

  let positives = (good / all)*100 

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
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positives {positives} %</p>
    </div>
  )
}

export default App