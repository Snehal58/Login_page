import React, { useState } from "react";
import "./Home.css"
const Home = ({handleSubmit}) => {

  const [username, setUsername] = useState(""); //hook
  const [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleLogin() {
    handleSubmit(username, password);    
  }

  return (
    <div className="form-card">
      <div className="name">
        <label htmlFor="username">Username:</label>
        <input type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="mobile">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button className = "submit" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;
