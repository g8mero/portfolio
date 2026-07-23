import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <div class = "bg-emerald-950 h-full w-full rounded-md flex justify-center items-center">
      <h1 class="text-center font-serif font-extrabold text-8xl">Hello World!</h1>
    </div>
  )
}

export default App
