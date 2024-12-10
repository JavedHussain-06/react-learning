//this file is used to share data between components

import { createContext, useState } from "react"
import PropTypes from "prop-types"
const UserContext = createContext()

const UserProvider = ({children}) => {

  const [user, setUser] = useState({
    name: "Javed Hussain",
    age: 23
  })

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node
}

export { UserContext , UserProvider};
