import React from 'react';
import me from '../../assets/imagesOfMe/image3.jpeg';
import './style.css';



function About() {

  return (
    <section className='about'>
      <div className='about-header'>
      <h2>About Me</h2>
      <div className='line-header'></div>
      </div>
      <div className='about-content'>
    <div>
     
      <p>
      Hey, I'm Jared, but you can call me Jay. I'm a full stack web developer with a passion for creating and learning.
      </p>
      <p>
      Currently based in San Antonio, Texas and graduated from UTSA as a Full Stack Web Developer.
      </p>
      <p>
      Some of my hobbies are gaming, coffee, and you guessed it, coding! How is coffee a hobby, you may be wondering? Why not, It's fun, delicious, social, and you can spend as little as $5 to get a boost.
      </p>

    </div>
    <div className="image-container">
      <img src={me} alt="me" className="me"/>
    </div>
    </div>
    </section>
  );
};

export default About;
