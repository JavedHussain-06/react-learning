import { useState, useContext } from "react";
import { UserContext } from "./UserContext"; // getting this from UserContext.jsx file which has user data


const UpdateProfile = () => {
  const { setUser } = useContext(UserContext); //setUser is a function from UserContext.jsx file  

  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.name.trim() && newUser.age.trim()) {
      setUser(newUser);  // this updates the actual user data in UserContext  file 
      setNewUser({ name: "", age: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Update Your Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={newUser.name}
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <label htmlFor="age"> Update Your Age</label>
      <input
        type="number"
        name="age"
        placeholder="enter your age"
        value={newUser.age}
        id="age"
        onChange={handleChange}
      />

      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateProfile;
