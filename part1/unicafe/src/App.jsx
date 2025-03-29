import { useState } from 'react'

const Header = ( {title} ) => <h1>{title}</h1>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  if (total === 0) {
    return <div>No feedback given</div>
  }
  return (
    <>
      <p>good {good}</p> 
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good - bad) / total}</p>
      <p>positive {good / total}%</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title="give feedback"/>
      <button onClick= {() => setGood(good + 1)}>good</button>
      <button onClick= {() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick= {() => setBad(bad + 1)}>bad</button>
      <Header title="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
