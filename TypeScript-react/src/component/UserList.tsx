import { useEffect, useState } from "react"
import type { UserList } from "../types"

const UserList = () => {
    const [users , setUsers] = useState<UserList[] >([])
    const [loading ,setLoading ] = useState<boolean>(true)
    const [error , setError] = useState<string | null>(null)
    
    useEffect(() => {
        const fetchUsers = async () => {
          try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
           if(!response.ok){
            throw new Error("Network response was not ok")
           }
            const data : UserList[] = await response.json()
            setUsers(data)
          }catch(error){
            setError(error instanceof Error ? error.message : "An unknown error occurred While fet6ching users data")
          }finally{
            setLoading(false)
          }
        }
       fetchUsers()
    })
    if(loading){
        return <h1 className="text-center text-gray-600">Loading...</h1>
    }
    if(error){
        return <div>{error}</div>
    }
  return ( <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>
      <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border border-gray-600 px-4 py-2">ID</th>
              <th className="border border-gray-600 px-4 py-2">Name</th>
              <th className="border border-gray-600 px-4 py-2">Username</th>
              <th className="border border-gray-600 px-4 py-2">Email</th>
              <th className="border border-gray-600 px-4 py-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: UserList) => (
              <tr
                key={user.id}
                className={`text-center cursor-pointer transition-all`}
              >
                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
  </div>)
}

export default UserList