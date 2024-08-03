import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Statics = (props) => {
  return(
    <div>
      <h2>Statics</h2>
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positives {props.positives} %</p>
    </div>
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
    <Statics
      good={good}
      neutral={neutral}
      bad={bad}
      all={all}
      positives={positives}
      average={average}
    />
    </div>
  )
}

export default App