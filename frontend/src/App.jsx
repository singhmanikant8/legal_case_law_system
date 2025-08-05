import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homePage';
import Signup from './components/signUp';
import Login from './components/loginPage';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
