import { Info } from "../types"
type user ={
  user : Info
}
const UserInfo = ( {user : {name, age, email}} : user) => {
  return (
    <div>
        name : {name} <br />
        age : {age} <br />
        email : {email}
    </div>
  )
}

export default UserInfo