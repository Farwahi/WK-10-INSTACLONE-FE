import React, { useState } from 'react';
import { loginFetch } from "../../utils/fetch";
import './Login.css'


const Login = ({setIsLoggedIn}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault(); 

    try {
    
      const res = await loginFetch(username, password);
     setIsLoggedIn(res.user)
      console.log('Login successful!', res);
    } catch (error) {
      
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;