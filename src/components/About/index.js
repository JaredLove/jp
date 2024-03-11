import React from 'react';

import './style.css';


function About() {
 

  return (
  <div className='about'>   
      
      <div className='about-content'>
   
      <div className='header-one'>
          <h2>ABOUT ME</h2>
      </div>
        <p>
        Hey, I'm Jared, but you can call me Jay. I'm a full stack web developer with a passion for <span className="color-change">creating</span> and <span className="color-change">learning</span>.


        Currently based in San Antonio, Texas and graduated from <span className="color-change">UTSA</span> as a <span className="color-change">Full Stack Web Developer</span>.


        Some of my hobbies are <span className="color-change">gaming</span>, <span className="color-change">coffee</span>, and you guessed it, <span className="color-change">coding</span>! How is coffee a hobby, you may be wondering? Why not, It's fun, delicious, social, and you can spend as little as $5 to get a <span className="color-change">boost</span>.
        </p>
      </div>

    </div>

  );
};

export default About;
