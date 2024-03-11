import React from 'react';
import me from "../assets/imagesOfMe/nature.JPG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const  Home = () => { 
  return (



    <section className="home-section-container">
        <div className='home-header'>

          <div className='home-header-content'>
              <h1>Jared Love</h1>
              <h3>Web Developer & IT Specialist</h3>
              <p>Crafting <span className='color-change'>pixels</span> by day, fixing <span className='color-change'>servers</span> by night—I'm the <span className='color-change'>digital wizard</span> ensuring your clicks cast <span className='color-change'>spells</span> and your systems stay <span className='color-change'>bright.</span></p>

          <div className='head-end'>
            <ul>
                <li>
                  <a href='https://www.linkedin.com/in/jared-love-188479241/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </li>
                <li>
                  <a href='https://github.com/JaredLove' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                </li>
                <li>
                  <a href='https://twitter.com/404Jared' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
                </li>
                <li>
                  <a href="mailto:lovejared91@Yahoo.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
                </li>
            </ul>
        </div>   
          </div>
          <div className='home-header-image'>
            <img src={me} alt='me' className='img-me' />
            </div>
        </div> 
      </section>


  );
}
export default Home;
