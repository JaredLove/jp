import React from 'react';
import Home from './pages/Home.js';
import Header from './components/Header';
import Work from './components/Work';
import About from './components/About';
import Resume from './components/Expertise';
import Footer from './components/Footer';
import Mouse from './components/Mouse';

  const App = () => {


  return (

    <>
      <Mouse />
      <Header />
      <Home />
      <About />
      <Resume /> 
      <Work />
      <Footer />
</>

  );
}

export default App;
