import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homePage';
import Signup from './components/signUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
