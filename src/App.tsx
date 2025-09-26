import { useState } from 'react'
import './App.css'

function App() {
  const [cookies, setCookies] = useState(0)
  const [multiplier, setMultiplier] = useState(1)
  const [autoClickerCount, setAutoClickerCount] = useState(0)

  // Auto clicker effect
  useState(() => {
    const interval = setInterval(() => {
      setCookies(c => c + (autoClickerCount * multiplier))
    }, 1000)
    return () => clearInterval(interval)
  }, [autoClickerCount, multiplier])

  const clickCookie = () => {
    setCookies(c => c + multiplier)
  }

  const buyMultiplier = () => {
    const cost = Math.floor(50 * Math.pow(1.5, multiplier - 1))
    if (cookies >= cost) {
      setCookies(c => c - cost)
      setMultiplier(m => m + 1)
    }
  }

  const buyAutoClicker = () => {
    const cost = Math.floor(100 * Math.pow(1.5, autoClickerCount))
    if (cookies >= cost) {
      setCookies(c => c - cost)
      setAutoClickerCount(ac => ac + 1)
    }
  }

  return (
    <div className="cookie-clicker">
      <h1>Cookie Clicker</h1>
      
      <div className="stats">
        <p>Cookies: {Math.floor(cookies)}</p>
        <p>Multiplier: {multiplier}x</p>
        <p>Auto Clickers: {autoClickerCount}</p>
      </div>

      <button className="cookie-button" onClick={clickCookie}>
        🍪
      </button>

      <div className="upgrades">
        <button 
          onClick={buyMultiplier}
          disabled={cookies < Math.floor(50 * Math.pow(1.5, multiplier - 1))}
        >
          Buy Multiplier ({Math.floor(50 * Math.pow(1.5, multiplier - 1))} cookies)
        </button>

        <button
          onClick={buyAutoClicker}
          disabled={cookies < Math.floor(100 * Math.pow(1.5, autoClickerCount))}
        >
          Buy Auto Clicker ({Math.floor(100 * Math.pow(1.5, autoClickerCount))} cookies)
        </button>
      </div>
    </div>
  )
}

export default App