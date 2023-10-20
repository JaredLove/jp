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
      console.log(currentPage);
    };
  return (

    <>
      <Mouse />
      <Header handleNavigationClick={handleNavigationClick} currentPage={currentPage}/>
      <div onPointerEnter={() => handleNavigationClick('home')  } id='home'>
      <Home />
      </div>
      <div onPointerEnter={() => handleNavigationClick('about')  } id='about'>
      <About />
      </div>
      <div onPointerEnter={() => handleNavigationClick('resume')  } id='resume'>
      <Resume /> 
      </div>
      <div  onPointerEnter={() => handleNavigationClick('work')  }id='work'>
      <Work />
      </div>
      <div onPointerEnter={() => handleNavigationClick('contact')  }id='contact'>
      <Footer />
      </div>
</>

  );
}

export default App;
