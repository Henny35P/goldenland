import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Homepage from './homepage/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='mw-50'>
        <Homepage />
        </div>
    </div>
  )
}

export default App
