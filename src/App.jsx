import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing.jsx';
import styles from './style.js';

function App() {
  return (
    <Router basename={"/letenskeschody.cz"}>
    <div className={`pt-16 xs:pt-20 relative z-20 min-h-screen overflow-y-auto`}>
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<><Navbar /><Home /></>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
