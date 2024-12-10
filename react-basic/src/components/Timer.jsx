import { useRef, useState , } from "react"

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const timeRef = useRef(null);
    const handleStart = () => {
        if(timeRef.current)
            return
        timeRef.current = setInterval(()=>{
            setSeconds(prevSec => prevSec + 1)
        }, 1000)
    }
    const handleStop =()=>{
        clearInterval(timeRef.current)
        timeRef.current = null
    }
    const handleReset = ()=> {
        handleStop()
        setSeconds(0)
    }
  return (
    <div>
        <h1>Timer : {seconds}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Timer