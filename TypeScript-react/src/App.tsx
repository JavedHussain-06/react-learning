import { useState } from "react";
import Buttons from "./component/Buttons"
import UserInfo from "./component/UserInfo";
import AdminInfo from "./component/AdminInfo";
import Counter from "./component/Counter";
import UserProfile from "./component/UserProfile";
import FocusInput from "./component/FocusInput";
import ContactFrom from "./component/ContactFrom";
import CounterReducer from "./component/CounterReducer";
import UserList from "./component/Userlist";
import { Flex, Text, Button } from "@radix-ui/themes";

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
        <Buttons label="Click Me" onClick={handleClick} disabled={isDisabled} />
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
       {/* { <CounterReducer />} */}\
       <UserList />
       <button className="btn btn-active">Default</button>
<button className="btn btn-active btn-neutral">Neutral</button>
<button className="btn btn-active btn-primary">Primary</button>
<button className="btn btn-active btn-secondary">Secondary</button>
<button className="btn btn-active btn-accent">Accent</button>
<button className="btn btn-active btn-ghost">Ghost</button>
<button className="btn btn-active btn-link">Link</button>

		<Flex direction="column" gap="2">
			<Text>Hello from Radix Themes :)</Text>
			<Button>Let's go</Button>
		</Flex>
    </div>
  );
};

export default App;
