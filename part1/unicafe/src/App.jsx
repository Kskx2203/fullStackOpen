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

  return (
    <div>
      <Header title="give feedback"/>
      <button onClick= {() => setGood(good + 1)}>good</button>
      <button onClick= {() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick= {() => setBad(bad + 1)}>bad</button>
      <Header title="statistics"/>
      <PrintClicks good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

export default App
