import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticsLine = (props) => {
  return(
    <tr>
      <td>
        {props.text}
      </td> 
      <td>
        {props.value}
      </td>
    </tr>
  )
}

const Statics = (props) => {
  
  if(props.all !== 0){
    return(
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticsLine
              text='Good'
              value={props.good}
            />
            <StatisticsLine
              text='Neutral'
              value={props.neutral}
            />
            <StatisticsLine
              text='Bad'
              value={props.bad}
            />
            <StatisticsLine
              text='All'
              value={props.all}
            />
            <StatisticsLine
              text='Average'
              value={props.average}
            />
            <StatisticsLine
              text='Positives'
              value={`${props.positives} %`}
            />
          </tbody>
        </table>
      </div>
  )} else{
    return (
      <div>
        <h2>Statistics</h2>
        <p>No Feedback given</p>
      </div>)
  }
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