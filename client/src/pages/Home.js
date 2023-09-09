import React, { useEffect, useState } from 'react';
// import coverImage from '../../assets/images/test.png';
// import timeWork from "../../assets/images/t2wlay.png";
// import book from "../../assets/images/b2glay.png";
// import watchTime from '../../assets/images/wtlay.png';
// import me from '../../assets/images/meps.jpg';
import Work from '../components/Work';
import Resume from '../components/Expertise';
import About from '../components/About';
import Contact from '../components/Contact';
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
    <main className='hero'>
      
    <div className='homeSection'>
      

      <div className='home'>
        
        <h1>
        <span className='letterHover'>J</span>
        <span className='letterHover'>a</span>
        <span className='letterHover'>r</span>
        <span className='letterHover'>e</span>
        <span className='letterHover'>d</span>
        <span className='letterHover'> L</span>
        <span className='letterHover'>o</span>
        <span className='letterHover'>v</span>
        <span className='letterHover'>e</span>
        </h1>
        <h2>
        <span className='letterHover'> W</span>
        <span className='letterHover'>e</span>
        <span className='letterHover'>b</span>

        <span className='letterHover'> D</span>
        <span className='letterHover'>e</span>
        <span className='letterHover'>v</span>
        <span className='letterHover'>e</span>
        <span className='letterHover'>l</span>
        <span className='letterHover'>o</span>
        <span className='letterHover'>p</span>
        <span className='letterHover'>e</span>
        <span className='letterHover'>r</span>

        </h2>



        <h3> I design and build <span className='design'>digital experiences.</span></h3>  
        
        
      <div className='icons'> 
       
      <a href='#contact' > <FontAwesomeIcon icon={faMailBulk} /></a>
      <a href='https://github.com/JaredLove' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
      <a href='https://www.linkedin.com/in/jared-love-188479241/' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} /></a>

    </div>


    <div className='borderTech'>
    
{/* <ol>
<h3>Tech Stack:</h3>
<li>
<FontAwesomeIcon className='blue' icon={faCss3Alt} />
</li>
<li>
<FontAwesomeIcon className='orange' icon={faHtml5} />
</li>
<li>
<FontAwesomeIcon className='yellow' icon={faJs} />
</li>
<li>
<FontAwesomeIcon className='lightBlue' icon={faReact} />
</li>
</ol> */}
</div>
    </div>     
    
    
    {/* <div className='avatarBorder'>
      <img src={me} alt='me' className='avatar'></img>

    </div> */}
         
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
           <Contact/>
</div>
</main>

  );
}
export default Home;
