import React from 'react';
import me from '../assets/imagesOfMe/image3.jpeg';
const  Home = () => { 

  return (



    <section className="home-section-container">
      <div className='home-header'>
        <span>Hi, my name is</span>
        <h1>Jared Love</h1>
        <p>Full Stack Web Developer</p>
        <p id='t-p'>Turning ideas into code, one project at a time. Where innovation meets design.</p>
      </div>
      <div className='home-footer'>
        <div>
          <span>3+</span>
          <p>Years of Experience</p>
        </div>
        <div>
          <span>50+</span>
          <p>Projects Completed</p>
        </div>
      </div>
      </section>


  );
}
export default Home;
