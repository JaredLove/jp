import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faDatabase, faThumbsUp, faCircleCheck, faCheck} from '@fortawesome/free-solid-svg-icons';
import './style.css';

function Resume() {

return (
    <div className='resumeInfo'>
      
      <div><h1 className='resumeTitle'>Expertise</h1>
      <div className="cover-expertise"></div>
      </div>


      <div className="expertise-content">
      <ul>
      <li className='borderInfo1'>
      <div className='frontEnd'>
      <h1>Frontend Developer</h1>
      <span className='icon'><FontAwesomeIcon icon={faImage} /></span>
            <ol>
              <li><FontAwesomeIcon icon={faCheck} className="fai" />Crafting Engaging Interfaces</li>
              <li><FontAwesomeIcon icon={faCheck} className="fai" />Code with Creative Vision</li>
              <li><FontAwesomeIcon icon={faCheck} className="fai" />Responsive Design Expertise</li>
              <li><FontAwesomeIcon icon={faCheck} className="fai" />User-Centric Frontend Solutions</li>
            </ol>
      </div>

      </li>
      <li className='borderInfo1'>

      <div className='backEnd'>
      <div >



      </div> 
      <h1>Backend Developer</h1> 
      <span className='icon'><FontAwesomeIcon icon={faDatabase} /></span>
      <ol>
              <li><FontAwesomeIcon icon={faCheck} className="fai" />Powering Apps Efficiently</li>
              <li><FontAwesomeIcon icon={faCheck} className="fai" />Database Management</li>
              <li><FontAwesomeIcon icon={faCheck} className="fai" />Security and Reliability Focus</li>
              <li><FontAwesomeIcon icon={faCheck} className="fai" />Server-Side Logic</li>
      </ol>

      </div>
      </li>
      <li className='borderInfo1'>
      <div className='value'>
        <div> 

      </div>
      <h1>Value</h1>  
      <span className='icon'><FontAwesomeIcon icon={faThumbsUp} /></span>
      <ol>
              <li>
                <FontAwesomeIcon icon={faCheck} className="fai" />
               Full Stack Versatility
              </li>
              <li><FontAwesomeIcon icon={faCheck} className="fai" />Passionate Problem Solver</li>
              <li><FontAwesomeIcon icon={faCheck} className="fai" />Collaborative Partner</li>
              <li><FontAwesomeIcon icon={faCheck} className="fai" />Technical Solutions for Success</li>
      </ol>

      </div>
      </li>
      </ul>
      </div>
<div className="tech-list-container">
  <div className="tech-title"><h2>Here are some technologies I’ve been working with recently:</h2></div>

    <div className='techList'>
    <div className="techListContent">
    <ul>
        <li><span><FontAwesomeIcon icon={faCircleCheck} className="mint"/>  React</span></li>
        <li><span><FontAwesomeIcon icon={faCircleCheck} className="mint"/> JavaScript (ES6+)</span></li>
        <li><span><FontAwesomeIcon icon={faCircleCheck} className="mint"/> HTML & CSS</span></li>
        <li><span><FontAwesomeIcon icon={faCircleCheck} className="mint"/> MERN</span></li>
        <li><span><FontAwesomeIcon icon={faCircleCheck} className="mint"/> MVC</span></li>
        <li><span><FontAwesomeIcon icon={faCircleCheck} className="mint"/> Handlebars</span></li>
        <li><span><FontAwesomeIcon icon={faCircleCheck} className="mint"/> Bootstrap</span></li>
    </ul>
    </div>
    <div>
      <ul>
        <li><span><FontAwesomeIcon icon={faCircleCheck} className="mint"/> MySQL</span></li>
        <li><span><FontAwesomeIcon icon={faCircleCheck} className="mint"/> Node.js</span></li>
        <li><span><FontAwesomeIcon icon={faCircleCheck} className="mint"/> MongoDB</span></li>
        <li><span><FontAwesomeIcon icon={faCircleCheck} className="mint"/> Express</span></li>
        <li><span><FontAwesomeIcon icon={faCircleCheck} className="mint"/> jQuery</span></li>
        <li><span><FontAwesomeIcon icon={faCircleCheck} className="mint"/> RESTful APIs</span></li>
        <li><span><FontAwesomeIcon icon={faCircleCheck} className="mint"/> GraphQL</span></li>
      </ul>
    </div>
    </div>
    <div>
    <h1 className='resumeLink'>Take a look at my <a href="/" target="_blank" rel="noopener noreferrer">Resume</a></h1> 
    </div>
    </div>
    </div>
);
}

export default Resume;
