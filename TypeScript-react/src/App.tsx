import { useState } from "react";
import Button from "./component/Button"
import UserInfo from "./component/UserInfo";
import AdminInfo from "./component/AdminInfo";
import Counter from "./component/Counter";
import UserProfile from "./component/UserProfile";
import FocusInput from "./component/FocusInput";
import ContactFrom from "./component/ContactFrom";
import CounterReducer from "./component/CounterReducer";

const App: React.FC = () => {

  const [isDisabled, setIsDisabled] = useState(false)
  
  const handleClick = () => {
    setIsDisabled(prev => !prev)
    setTimeout(() => setIsDisabled(prev => !prev), 3000)
alert("Button is enabled")
    
  }

  const user = {
    name : "Javed Hussain",
    age : 23,
    email : "javedhussain@gmail.com",
  }
  const adminInfo = {
    name : "Javed Hussain",
    age : 23,
    email : "javedhussain@gmail.com",
    role : "Admin",
    lastLogin : new Date()
  }

  return (
    <div className="p-4">
        <Button label="Click Me" onClick={handleClick} disabled={isDisabled} />
        <UserInfo user={user} />
        <AdminInfo adminInfo={adminInfo} />
        {/* <Counter />
        <UserProfile />
        <hr />
        <hr />
        <hr />
        <hr />

        <h1>Focus Input</h1>
        <FocusInput />
        <h1>Contact Form</h1>
        <ContactFrom /> */}
        <CounterReducer />

    </div>
  );
};

export default App;
