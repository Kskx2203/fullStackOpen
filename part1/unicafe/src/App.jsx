import { useState } from 'react'

const Header = ( {title} ) => <h1>{title}</h1>

const PrintClicks = ({ good, neutral, bad }) => { 
  return (
    <>
      <p>good {good}</p> 
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  )
}

const Button = (props) => <button onClick={props.onClick}> {props.text} </button>

const All = ( {all} ) => {
  if (all === 0) {
    return <div>No feedback given</div>
  }
  return <div> all {all}</div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  var all = good + neutral + bad
  var average = (good - bad) / all 
  var positive = (good / all) * 100

  console.log("Good:", good, "Neutral:", neutral, "Bad:", bad, "All:", all, "Average:", average);

  return (
    <div>
      <Header title="give feedback"/>
      <Button onClick= {() => setGood(good + 1)} text="good" />
      <Button onClick= {() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick= {() => setBad(bad + 1)} text="bad"/>
      <Header title="statistics"/>
      <PrintClicks good={good} neutral={neutral} bad={bad} />
      <All all={all}/>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

export default App
