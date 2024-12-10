import { useState } from "react"

const UserProfile = () => {
    interface User{
        name : string,
        age : number
    }
    const [user , setUser] = useState<User>({
        name : "Javed Hussain",
        age : 23
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=> {
        const {name , value} = e.target
        setUser({...user , [name] : value})
    }
  return (
    <div>
        <h1>Hello I&apos;m {user.name} and my age is {user.age}</h1>
        <input type="text" name="name" id="name" value={user.name} onChange={handleChange} placeholder="Enter your name" />
        <input type="number" name="age" id="age" value={user.age} onChange={handleChange} placeholder="Enter your name" />
    </div>
  )
}

export default UserProfile