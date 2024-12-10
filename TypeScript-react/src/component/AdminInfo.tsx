import { AdminInfoList } from "../types"

type adminInfo = {
  adminInfo : AdminInfoList 
}

const AdminInfo = ({adminInfo : {name, age, email, role, lastLogin}} : adminInfo) => {
  return (
    <div className="border-t-4">
      <h1 className="text-xl">Admin Information</h1>
      <h2>Name : {name}</h2>
      <h2>Age : {age}</h2>
      <h2>Email : {email}</h2>
      <h2>Role : {role}</h2>
      <h2>lastLogin : {lastLogin.toLocaleString()}</h2>
    </div>
  )
}

export default AdminInfo