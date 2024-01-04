import React, {useState} from "react";
import './style.css';

function Resume() {
  const [choice, setChoice] = useState('skills');
  const [skillsCurrent, setSkillsCurrent] = useState('frontend');
  // const [educationCurrent, setEducationCurrent] = useState('education');

  return (
    <section className='resume-info'>
      <div className='resume-header'>
        <h1>Skills And Education</h1>
        <div className='line-header'></div>

      </div>        
      <div className='resume-header-buttons'> 
      <span id="lines1"><span id={choice === 'skills' ? "lies1-active" : "lies1"}></span><button className='resume-header-button' onClick={() => setChoice('skills')}>Skills</button></span>
      <span id="lines1"><span id={choice === 'education' ? "lies1-active" : "lies1"}></span><button className='resume-header-button' onClick={() => setChoice('education')}>Education</button></span>
      </div>
      <div className='resume-body'>
        {choice === 'skills' ? (
          <div className='skills'>
            <div className="skills-container"> 
                  <div className='skills-header-buttons'>
                      <span id="lines"><span id={skillsCurrent === 'frontend' ? "lies-active" : "lies"}></span><button className='skills-header-button' onClick={() => setSkillsCurrent('frontend')}>FrontEnd</button></span>
                      <span id="lines"><span id={skillsCurrent === 'backend' ? "lies-active" : "lies"}></span><button className='skills-header-button' onClick={() => setSkillsCurrent('backend')}>BackEnd</button></span>
                      <span id="lines"><span id={skillsCurrent === 'other' ? "lies-active" : "lies"}></span><button className='skills-header-button' onClick={() => setSkillsCurrent('other')}>Other</button></span>
                      <span id="lines"><span id={skillsCurrent === 'fullstack' ? "lies-active" : "lies"}></span><button className='skills-header-button' onClick={() => setSkillsCurrent('fullstack')}>Full Stack</button></span>
                    </div>
            {skillsCurrent === 'frontend' ? (
              <div className='skills-header'>
                <div>       
                  <h2>FrontEnd</h2>
                </div>
                <div>
                  <ul>
                    <li>
                      <p>HTML5</p>
                    </li>
                    <li>
                      <p>CSS3 / Bootstrap / Tailwind</p>
                    </li>
                    <li>
                      <p>JavaScript</p>
                    </li>
                    <li>
                      <p>jQuery</p>
                    </li>
                    <li>
                      <p>React</p>
                    </li>
                    <li>
                      <p>Angular</p>
                    </li>
                    <li>
                      <p>Redux</p>
                    </li>
                  </ul>
                </div>
              </div>
            ) : skillsCurrent === 'backend' ? (
              <div className='skills-header'>
                <h2>BackEnd</h2>
                <ul>
                    <li>
                      <p>Node.JS</p>
                    </li>
                    <li>
                      <p>Express.JS</p>
                    </li>
                    <li>
                      <p>MySQL</p>
                    </li>
                    <li>
                      <p>MongoDB</p>
                    </li>
                    <li>
                      <p>GraphQL</p>
                    </li>
                    <li>
                      <p>Api</p>
                    </li>
                    <li>
                      <p>Mongoose</p>
                    </li>
                  </ul>
              </div>
            ) : skillsCurrent === 'other' ? (
              <div className='skills-header'>
                <h2>Other</h2>
                <ul>
                    <li>
                      <p>Git</p>
                    </li>
                    <li>
                      <p>Github</p>
                    </li>
                    <li>
                      <p>Heroku</p>
                    </li>
                    <li>
                      <p>Netlify</p>
                    </li>
                    <li>
                      <p>VS Code</p>
                    </li>
                  </ul>
              </div>
            ) : (
              <div className='skills-header'>
                <h2>Full Stack</h2>
                  <ul>
                    <li>
                      <p>MVC</p>
                    </li>
                    <li>
                      <p>MERN</p>
                    </li>
                  </ul>
              </div>
            )}
          </div>
        </div>
        ) : (
          <div className='education'>
            <div className='education-header'>
              <div>
                <h2>Education</h2>
              </div>
              
          
            <ul>
              <li>
                <h3>University Of Texas San Antonio</h3>
                <p>Full Stack Web Development</p>
                <p>I acquired a comprehensive skill set in both front-end and back-end
                  technologies. I gained proficiency in HTML, CSS, and JavaScript for
                  building dynamic and responsive user interfaces. Additionally,
                  I gained hands-on experience with server-side development using
                  Node.js and Express, as well as database management with MongoDB
                  and MySQL. I learned essential topics such as RESTful
                  API design, authentication, and deployment strategies, empowering
                  me to create robust and scalable web applications.</p>
              </li>
            </ul>    
          </div>
          </div>
        )}
      </div>
    </section>
  );
}
export default Resume;