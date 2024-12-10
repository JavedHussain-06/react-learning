import Counter from "./components/Counter"
import FocusInput from "./components/FocusInput"
import Timer from "./components/Timer"
import UpdateProfile from "./components/UpdateProfile"
import{ UserProvider } from "./components/UserContext"
import UserProfile from "./components/UserProfile"

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateProfile />
      <Counter />
      <FocusInput/>
      <Timer/>
    </UserProvider>
  )
}

export default App