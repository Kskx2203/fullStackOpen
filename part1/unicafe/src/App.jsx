import { useState } from 'react'

const Header = ( {title} ) => {
  return (
    <h1>
      {title}
    </h1>
  )
}

const PrintClicks = ({ good, neutral, bad }) => { 
  return (
    <>
      <p>good {good}</p> 
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [score, setScore] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const clickGood = () => {
    const updatedGood = good + 1
    const updatedScore = score + 1
    const updatedTotal = total + 1

    setGood(updatedGood)
    console.log('Good before', good)
    setTotal(updatedGood + neutral + bad)
    setScore(updatedScore)
    setAverage(updatedScore/updatedTotal)
    console.log(updatedTotal)
    setPositive((updatedGood / updatedTotal) * 100)
  }

  const clickNeutral = () => {
    const updatedNeutral = neutral + 1
    const updatedTotal = total + 1

    setNeutral(updatedNeutral)
    console.log('Neutral before', neutral)
    setTotal(good + updatedNeutral + bad)
    setAverage(score/updatedTotal)
    console.log(total)
    setPositive((good / updatedTotal) * 100)
  }

  const clickBad = () => {
    const updatedBad = bad + 1
    const updatedScore = score - 1
    const updatedTotal = total + 1

    setBad(updatedBad)
    console.log('Bad before', bad)
    setTotal(good + neutral + updatedBad)
    setScore(updatedScore)
    setAverage(updatedScore/updatedTotal)
    console.log(total)
    setPositive((good / updatedTotal) * 100)
  }

  return (
    <div>
      <Header title="give feedback"/>
      <button onClick= {() => clickGood(good + 1)}>good</button>
      <button onClick= {() => clickNeutral(neutral + 1)}>neutral</button>
      <button onClick= {() => clickBad(bad + 1)}>bad</button>
      <Header title="statistics"/>
      <PrintClicks good={good} neutral={neutral} bad={bad} />
      <p>total {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
      
    </div>
  )
}

export default App
