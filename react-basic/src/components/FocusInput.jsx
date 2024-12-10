import { useRef } from "react"

const FocusInput = () => {
    const inputElement = useRef(null)
    const handleFocus = ()=> {inputElement.current.focus()
        inputElement.current.style.color = "red"
        inputElement.current.value = "Javed Hussain"
    }
  return (
    <div>
        <h1>FocusInput</h1>
        <input type="text" ref={inputElement} placeholder="Enter your name" />
        <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default FocusInput