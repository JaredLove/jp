import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import me from '../../assets/imagesOfMe/image3.jpeg';
import './style.css';
gsap.registerPlugin(ScrollTrigger);



function About() {
  useEffect(() => {
    const paragraphs = document.querySelectorAll('.color-change-paragraph');

    paragraphs.forEach((paragraph) => {
      const text = paragraph.innerText;
      paragraph.innerText = '';

      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.color = '#363636';
        paragraph.appendChild(span);

        gsap.to(span, {
          color: '#b7ab98',
          scrollTrigger: {
            trigger: span,
            start: 'top 90%',
            end: 'bottem 50%',
            scrub: true,
          },
          delay: 1 * index, // Delay each character's animation
          duration: 5,
        });
      });
    });
  }, []);

  return (
    <section className='about'>
      <h2>About Me</h2>
      <div className='about-content'>
    <div className="color-change-paragraph">
     
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
    <div>
      <img src={me} alt="me" className="me"/>
    </div>
    </div>
    </section>
  );
};

export default About;
