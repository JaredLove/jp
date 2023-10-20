import React, {useState} from 'react';
import Home from './pages/Home.js';
import Header from './components/Header';
import Work from './components/Work';
import About from './components/About';
import Resume from './components/Expertise';
import Footer from './components/Footer';
import Mouse from './components/Mouse';

  const App = () => {

    const [currentPage, setCurrentPage] = useState('home')
    const handleNavigationClick = (page) => {
      setCurrentPage(page);
    };
  return (

    <>
      <Mouse />
      <Header currentPage={currentPage}/>
      <Home />
      <About />
      <Resume /> 
      <Work />
      <Footer />
</>

  );
}

export default App;
