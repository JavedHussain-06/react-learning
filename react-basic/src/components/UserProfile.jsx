import { useContext } from "react"
import { UserContext } from "./UserContext" // getting this from UserContext.jsx file which has user data
const UserProfile = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
        <h1>Hello I&apos;m {user.name}</h1>
        <h3>Age: {user.age}</h3>
    </div>
  )
}

export default UserProfile