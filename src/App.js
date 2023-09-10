import React from 'react';
import Home from './pages/Home.js';
import { Route, Routes, Navigate } from "react-router-dom";
import Header from './components/Header';
  const App = () => {
  return (
    
    <div className='hero'>
      
    <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} /> 
      </Routes>

    </div>
    

  );
}

export default App;
