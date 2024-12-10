import { useState } from "react"
const Counter = () => {
    const [counter , setCounter] = useState<number>(0)
  return (
    <div>r
        <h1>Counter App Using useState() with defining with types</h1>
        <h1>{counter}</h1>
        <button onClick={()=> setCounter(counter+1)}>Increment</button>
        <button onClick={()=> setCounter(counter-1)}>Decrement</button>

    </div>
  )
}

export default Counter