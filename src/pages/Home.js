import React from 'react';
import Lottie from 'lottie-react';
const  Home = () => { 

  return (



    <section className="home-section-container">
      <div className='full-stack-container'>
        <div className='full-stack'>
          <h2><span className='hover-header'>F</span><span className='hover-header'>U</span><span className='hover-header'>L</span><span className='hover-header'>L</span></h2>
          <h2 id='tags' className='hover-header'>----</h2>
          <h2><span className='hover-header'>S</span><span className='hover-header'>T</span><span className='hover-header'>A</span><span className='hover-header'>C</span><span className='hover-header'>K</span></h2>
        </div>
      </div>
      <div className='web-dev-container'>
        <div className='web-dev'>
          <h2><span className='hover-header'>D</span><span className='hover-header'>E</span><span className='hover-header'>V</span><span className='hover-header'>E</span><span className='hover-header'>L</span><span className='hover-header'>O</span><span className='hover-header'>P</span><span className='hover-header'>E</span><span className='hover-header'>R</span></h2>
        
          <div className='web-dev-p'>
                      <h3>Jared Love</h3>
          <p>Turning ideas into code, one project at a time. Where innovation meets design.</p>
          </div>

        </div>
      </div>

      <div className='lottie-container'>
        <div className='lottie'>
          <Lottie
            animationData={require('../assets/json/animation_lnwy83t6.json')}
            loop
            autoplay
          />
        </div>
      </div>
      </section>


  );
}
export default Home;
