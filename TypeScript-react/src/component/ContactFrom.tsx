import { useRef, useState } from "react"

const ContactFrom = () => {
    interface user{
        name : string,
        age : number,
        email : string
    }
    const [user , setUser] = useState<user>({
        name : "",
        age : 0,
        email : ""
    })
    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const age = useRef<HTMLInputElement>(null)

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const nameValue = name.current?.value
        const emailValue = email.current?.value 
        const ageValue = age.current?.value
        setUser({
            name : nameValue ? nameValue : user.name,
            age : ageValue ? Number(ageValue) : user.age,
            email : emailValue ? emailValue : user.email
        })
    }

  return (
   <> <form onSubmit={handleSubmit}>
        <input type="text" ref={name} placeholder="Enter your name" />
        <input type="email" ref={email} placeholder="Enter your email" />
        <input type="number" ref={age} placeholder="Enter your age" />
        <button type="submit">Submit</button>
    </form>
    <ul>
        <li>Name : {user.name}</li>
        <li>Age : {user.age}</li>
        <li>Email : {user.email}</li>
    </ul>
    </>
  )
}

export default ContactFrom