import { useState } from 'react'
import './App.css'
import Idea from './Ideas/Idea'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Idea />
    </div>
  )
}

export default App
