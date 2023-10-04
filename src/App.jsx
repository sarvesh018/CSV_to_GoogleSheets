import { useState } from 'react'
import './App.css'

import DropFile from './components/dropFile'

function App() {
  const [count, setCount] = useState(0)
  const handleSubmit  = () =>{
    setCount(count+1);
  } 
  return (
    <>
      <DropFile/>
    </>
  )
}

export default App
