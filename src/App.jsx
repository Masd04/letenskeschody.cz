import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import styles from './style.js';

function App() {
  return (
    <Router basename={"/"}>
    <div className={`pt-20 relative z-20 min-h-screen overflow-y-auto`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
