import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
      <tr>
        <td>{props.text} </td>
        <td>{props.value} %</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>{props.text} </td>
        <td>{props.value} </td>
      </tr>
    )
  }

}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  if (props.allClicks <= 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={(props.good * 1 + props.bad * -1) / (total)} />
            <StatisticLine text="positive" value={props.good / (total) * 100} />
          </tbody>
        </table>
      </div>
    )
  }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const setGoodValue = newValue => {
    setAll(allClicks + 1)
    setGood(newValue)
  }

  const setNeutralValue = newValue => {
    setAll(allClicks + 1)
    setNeutral(newValue)
  }
  const setBadValue = newValue => {
    setAll(allClicks + 1)
    setBad(newValue)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGoodValue(good + 1)} text="good" />
      <Button handleClick={() => setNeutralValue(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBadValue(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  )
}

export default App