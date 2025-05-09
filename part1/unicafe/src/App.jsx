import { useState } from 'react'

const Header = ( {title} ) => <h1>{title}</h1>

const Button = (props) => ( <button onClick={props.onClick}>{props.text}</button>)

const StatisticLine = ( {text, value} ) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  if (total === 0) {
    return <div>No feedback given</div>
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={(good - bad) / total} />
        <StatisticLine text="positive" value={(good / total) * 100 + "%"} />
      </tbody>
    </table>
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
      <Button onClick= {() => setGood(good + 1)} text="good" />
      <Button onClick= {() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick= {() => setBad(bad + 1)} text="bad" />
      <Header title="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
