import { useRef } from "react"

const FocusInput = () => {
    const inputElement = useRef<HTMLInputElement>(null)
  return (
    <div>
        <input type="text" ref={inputElement} placeholder="Enter your name"/>
        <button onClick={() => inputElement.current?.focus()}>Focus</button>
    </div>
  )
}

export default FocusInput