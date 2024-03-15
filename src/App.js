import React, {useState} from 'react';
import Home from './pages/Home.js';
import Mouse from './components/Mouse';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Expertise';
import Footer from './components/Footer';
// import Loading from './components/Loading';

  const App = () => {
    // const [isLoading, setIsLoading] = useState(true);
    const [currentSection, setCurrentSection] = useState('home');
    const handleNavigationClick = (section) => {
      setCurrentSection(section);
      console.log(section);
    }

    // useEffect(() => {
    //   // Simulate an asynchronous operation (e.g., API call or data loading)
    //   setTimeout(() => {
    //     setIsLoading(false);
    //   }, 5000); // Replace with the actual loading logic
    // }, []);
  return (

  <>
     {/* {isLoading ? (
        <Loading />
      ) : ( */}
      <Header currentSection={currentSection} handleNavigationClick={handleNavigationClick}/>
      <Mouse />
      <Home />
      <section id='about'>
        <About />  
      </section>
      <section id='resume'>    
      <Resume />
      </section>
      <section id='work'>
      <Work />
      </section>
      <section id='contact'>
      <Footer />
      </section>
  </>

  );
}

export default App;
