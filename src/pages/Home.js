import React, { useEffect, useState } from 'react';
import Work from '../components/Work';
import Resume from '../components/Expertise';
import About from '../components/About';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub ,  faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faMailBulk} from '@fortawesome/free-solid-svg-icons';
  
  


const  Home = () => { 

  const [isVisible, setIsVisible] = useState({
    div1: false,
    div2: false,
    div3: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const div1 = document.getElementById('about');
      const div2 = document.getElementById('resume');
      const div3 = document.getElementById('work');
      const div4 = document.getElementById('contact');

      if (div1) {
        const boundingRect1 = div1.getBoundingClientRect();
        if (boundingRect1.top < window.innerHeight) {
          setIsVisible((prevState) => ({ ...prevState, div1: true }));
        }
      }

      if (div2) {
        const boundingRect2 = div2.getBoundingClientRect();
        if (boundingRect2.top < window.innerHeight) {
          setIsVisible((prevState) => ({ ...prevState, div2: true }));
        }
      }

      if (div3) {
        const boundingRect3 = div3.getBoundingClientRect();
        if (boundingRect3.top < window.innerHeight) {
          setIsVisible((prevState) => ({ ...prevState, div3: true }));
        }
      }
      if (div4) {
        const boundingRect3 = div4.getBoundingClientRect();
        if (boundingRect3.top < window.innerHeight) {
          setIsVisible((prevState) => ({ ...prevState, div4: true }));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      
    <div className='home-container'>
      <div className='home-content'>
        <div className='home-text'>
        <div className='home-text-name'>
        <div className='h2n'>
        <h1>Jared Love.</h1>
        </div>
        <div className='line'></div>     
        <div className='icons'> 
       
      <a href='#contact' > <FontAwesomeIcon icon={faMailBulk} /></a>
      <a href='https://github.com/JaredLove' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
      <a href='https://www.linkedin.com/in/jared-love-188479241/' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} /></a>

    </div>
    <div className='quote'> <p>"Simplicity is the ultimate sophistication." - Leonardo da Vinci</p></div>
        </div>
        <div className='home-text-content'>
        <h3>I design and build <span className='design'>digital experiences.</span></h3>  
        <p>I'm a web developer and I have a passion for creating and designing both functional and visually appealing websites and applications. I'm a team player and I'm always looking to learn new skills and <span className='lp'>technologies</span>. </p>
        <button className='learn-more'><a href="#about" >Learn More </a></button>
        </div>

    </div>
  </div>

    
    </div>  
 
    <div className='about' id='about'   style={{
          opacity: isVisible.div1 ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}    >
          <About />
      </div>

      

      <div className='resumeInfo' id='resume'     style={{
          opacity: isVisible.div2 ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}>
          <Resume />
      </div>
<div className='work' id='work' style={{
          opacity: isVisible.div3 ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}>
          <Work />
</div>

 
    <div id='contact' className='contactSection' style={{
          opacity: isVisible.div4 ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}>
           <Footer/>
</div>
</main>

  );
}
export default Home;
