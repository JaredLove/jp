import React from 'react';
import Home from './pages/Home.js';
import { Route, Routes, Navigate } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
  const App = () => {
  return (
   
     
    <div className='hero'>
     <header>
    <><Header/></>
     
  
      <Routes>
  
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} /> 
      </Routes></header>
    <Footer/>
    </div>
    

  );
}

export default App;
