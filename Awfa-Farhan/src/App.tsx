import { useState } from 'react'
import './App.css'
import Menu from '../src/components/Menu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Menu/>
      </div>
    </>
  )
}

export default App
