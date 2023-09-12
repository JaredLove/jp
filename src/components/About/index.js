import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArtstation, faSketch} from '@fortawesome/free-brands-svg-icons';
import {faCode, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import coffee from '../../assets/images/coffee.jpg';
import './style.css';


function About() {

    return (
        <div className='about'>
          <div className='cover-about'></div>
          <h1 className='aboutInfo'>About Me</h1>
      <div className='aboutContent'>
        <div><img className="aboutImg" src={coffee} alt='code'></img></div>
      <div className='aboutMe'>
       
        <p>
          
                Hey, I'm Jared, but you can call me <span className="gy">Jay.</span> I started my web
                development journey in 2021 but I have had an interest in it
                since 2018 when I took a course in c++ while attending college.
   
   </p> 
   <p>

   
                Currently based in San Antonio, Texas and graduated from
                UTSA as a <span className="gy">Full Stack Web Developer</span>.
 

   </p>
   <p>
                Some of my hobbies are gaming, coffee, and you guessed it, coding!
                How is coffee a hobby, you may be wondering? Why not, It's fun, 
                delicious, social, and you can spend as little as $5 to get a <span className="gy">boost.</span>
     </p>

        </div>     
    </div>
        
        <div className="about-text"> 
        <div className='aboutIconsContainer'>
     
        <div className='aboutIconsContent'>
        <div className='aboutIcons'>
        <FontAwesomeIcon icon={faUserCheck} />
        <h1>User Experiences</h1>
        <p>Building responsive websites that adapt effortlessly to any device.</p>
        </div>
        <div className='aboutIcons'>
        <FontAwesomeIcon icon={faArtstation} />
        <h1>Designing</h1>
        <p>I create intuitive, user-friendly interfaces that captivate and convert.</p>
        </div>
        <div className='aboutIcons'>
        <FontAwesomeIcon icon={faCode} />
        <h1>Pixel-Perfect</h1>
        <p>Ensuring your website not only looks beautiful but functions flawlessly.</p>
        </div>
        <div className='aboutIcons'>
        <FontAwesomeIcon icon={faSketch} />
        <h1>Code as My Canvas</h1>
        <p>Transforming your ideas into interactive web experiences.</p>
        </div>
        </div>
 
        </div>

    </div> 
    </div>
      );
}

export default About;
