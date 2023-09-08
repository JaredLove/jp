import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArtstation, faSketch} from '@fortawesome/free-brands-svg-icons';
import {faCode, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import coffee from '../../assets/images/coffee.jpg';
import './style.css';


function About() {

    return (
        <div className='about' id='about'>
        <h1 className='aboutInfo'><span className='navSign'> // </span>  About Me </h1>  
          
        <div className='aboutIconsContainer'>
          <div className='aboutIconsContent'>
        <div className='aboutIcons'>
        <FontAwesomeIcon icon={faUserCheck} />
        <h1>User Experiences</h1>
        <p>Building responsive websites that adapt effortlessly to any device, I ensure every user enjoys a seamless and engaging experience</p>
        </div>
        <div className='aboutIcons'>
        <FontAwesomeIcon icon={faArtstation} />
        <h1>Designing</h1>
        <p>My approach to web design goes beyond visuals; I create intuitive, user-friendly interfaces that captivate and convert.</p>
        </div>
        <div className='aboutIcons'>
        <FontAwesomeIcon icon={faCode} />
        <h1>Pixel-Perfect</h1>
        <p>With an eye for detail, I obsess over every pixel, ensuring your website not only looks beautiful but functions flawlessly.</p>
        </div>
        <div className='aboutIcons'>
        <FontAwesomeIcon icon={faSketch} />
        <h1>Code as My Canvas</h1>
        <p>Transforming your ideas into interactive web experiences, I wield code as my creative tool, crafting digital masterpieces that leave a lasting impression.</p>
        </div>
        </div>
        </div>

      <div className='aboutContent'>

      
           
      <div><img className="aboutImg" src={coffee} alt='code'></img></div>

      <div className='aboutMe'>
       
        <p>
          
                Hey, I'm Jared, but you can call me Jay. I started my web
                development journey in 2021 but I have had an interest in it
                since 2015 when I took a course in c++ while attending college.
   
   </p> 
   <p>

   
                Currently based in San Antonio, Texas and graduated from the
                UTSA full stack web developer boostcamp in december 2022.
 

   </p>
   <p>
          Some of my hobbies are gaming, coffee, and you guessed it, coding!
 

 
          How is coffee a hobby, you may be wondering? Why not, It's fun, 
          delicious, social, and you can spend as little as $5 to get a boost.
     </p>

        </div>     
</div>
        {/* <div
    //   style={{
    //     position: 'relative',
    //     width: '400px',
    //     height: '400px',
    //     left: '200px',
    //     top: '50px'
    //   }}
    //   onMouseEnter={() => setIsHovered(true)}
    //   onMouseLeave={() => setIsHovered(false)}
    // >
    //   <img
    //     src={me}
    //     alt="mypic"
    //     className='mypic'
    //     style={{
    //       width: '100%',
    //       height: '100%',
    //     }}
    //   />
    //   <div
    //   className='backgroundShade'
    //     style={{
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       right: 0,
    //       bottom: 0,
    //       background: `rgba(0, 0, 0, 0.5)`,
    //       opacity: isHovered ? 0 : 1,
    //       transition: 'opacity 0.5s ease-in-out',
    //     }}
    //   />
    // </div> */}
    </div>
    );
}

export default About;
