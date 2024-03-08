// src/App.jsx
import React from 'react';
import { useState } from 'react';
import Login from './components/LogIn/Login';
import SignUp from './components/signUp/signUp';
import UserProfile from './components/userprofiles/userprofile';
import Feed from './components/photofeed/Feed';
import ImageGallery from './components/Imagegallery/gallery';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="app">
      <h1>Instagram Clone</h1>
      {isLoggedIn.username ? (
        <div>
          <h2>Welcome, Syeda!</h2>
          <UserProfile />
          <Feed />
          <ImageGallery />
        </div>
      ) : (
        <div>
          <Login setIsLoggedIn={setIsLoggedIn} />
          <SignUp />
        </div>
      )}
    </div>
  );
};

export default App;
