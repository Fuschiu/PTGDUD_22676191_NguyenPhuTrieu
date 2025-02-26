import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [initialMoney, setInitialMoney] = useState(0)
  const [rate, setRate] = useState(0)
  const [expectedMoney, setExpectedMoney] = useState(0)
  const [results, setResults] = useState([])

  const calculate = () => {
    let year = 2025
    let money = parseFloat(initialMoney)
    const ratePercentage = parseFloat(rate) / 100
    const expected = parseFloat(expectedMoney)
    const resultArray = []

    while (money < expected) {
      money += money * ratePercentage
      resultArray.push({ year, money: money.toFixed(2), rate: ratePercentage * 100, moneyAfterYear: money.toFixed(2) })
      year++
    }

    setResults(resultArray)
  }

  return (
    <>
      <div className="card">
        <div>
          <label>
            Initial Money:
            <input type="number" value={initialMoney} onChange={(e) => setInitialMoney(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Rate (%):
            <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Expected Money:
            <input type="number" value={expectedMoney} onChange={(e) => setExpectedMoney(e.target.value)} />
          </label>
        </div>
        <button onClick={calculate}>Calculate</button>
        {results.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Money</th>
                <th>Rate (%)</th>
                <th>Money After Year</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td>{result.year}</td>
                  <td>{result.money}</td>
                  <td>{result.rate}</td>
                  <td>{result.moneyAfterYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App