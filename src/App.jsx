import { useState } from 'react'
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Login from './Login.jsx';
import Home from './Home.jsx';
import Signup from './SignUp.jsx';
import Game from './Game.jsx'
import GameApp from './GameApp.jsx'
import Leaderboard from './Leaderboard.jsx';
import Profile from './profile.jsx'
import Webcam from './webcam.jsx'



function App() {

  return (
    <div>
      <Routes>
        <Route path='/mobile-app/' element={<Home/>}/>
        <Route path="/mobile-app/login" element={<Login />} />
        <Route path="/mobile-app/signup" element={<Signup/>} />
        <Route path="/mobile-app/leaderboard" element={<Leaderboard/>} />
        <Route path="/mobile-app/zelda" element={<Game/>} />
        <Route path="/mobile-app/app2" element={<GameApp/>} />
        <Route path="/mobile-app/profile" element={<Profile/>} />
        <Route path="/mobile-app/webcam" element={<Webcam/>} />
      </Routes>
      </div>
  )
}

export default App
