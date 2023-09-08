import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faDatabase, faThumbsUp, faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import './style.css';

function Resume() {

return (
    <div className='resumeInfo' id='resume'>

<h1 className='resumeTitle'> <span className='navSign'>( )</span> My Expertise</h1>

<ul>
<li className='borderInfo1'>
<div className='frontEnd'>
  <div>

</div>
<h1>Frontend Developer</h1>
<span className='icon'><FontAwesomeIcon icon={faImage} /></span>
      <ol>
        <li>Crafting Engaging Interfaces</li>
        <li>Code with Creative Vision</li>
        <li>Responsive Design Expertise</li>
        <li>User-Centric Frontend Solutions</li>
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
        <li>Powering Apps Efficiently</li>
        <li>Database Management</li>
        <li>Security and Reliability Focus</li>
        <li>Server-Side Logic</li>
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
        <li>Full-Stack Versatility</li>
        <li>Passionate Problem Solver</li>
        <li>Collaborative Partner</li>
        <li>Technical Solutions for Success</li>
</ol>

</div>
</li>
</ul>
<div>
<h1>Here are some technologies I’ve been working with recently:</h1>
<div className='techList'>
<div className="techListContent">
<ul>
    <li><span><FontAwesomeIcon icon={faCircleCheck}/>  React</span></li>
    <li><span><FontAwesomeIcon icon={faCircleCheck}/> JavaScript (ES6+)</span></li>
    <li><span><FontAwesomeIcon icon={faCircleCheck}/> HTML & CSS</span></li>
    <li><span><FontAwesomeIcon icon={faCircleCheck}/> MERN</span></li>
    <li><span><FontAwesomeIcon icon={faCircleCheck}/> MVC</span></li>
    <li><span><FontAwesomeIcon icon={faCircleCheck}/> Handlebars</span></li>
    <li><span><FontAwesomeIcon icon={faCircleCheck}/> Bootstrap</span></li>
</ul>
</div>
<div>
  <ul>
    <li><span><FontAwesomeIcon icon={faCircleCheck}/> MySQL</span></li>
    <li><span><FontAwesomeIcon icon={faCircleCheck}/> Node.js</span></li>
    <li><span><FontAwesomeIcon icon={faCircleCheck}/> MongoDB</span></li>
    <li><span><FontAwesomeIcon icon={faCircleCheck}/> Express</span></li>
    <li><span><FontAwesomeIcon icon={faCircleCheck}/> jQuery</span></li>
    <li><span><FontAwesomeIcon icon={faCircleCheck}/> RESTful APIs</span></li>
    <li><span><FontAwesomeIcon icon={faCircleCheck}/> GraphQL</span></li>
  </ul>
</div>
</div>
<div>
<h1 className='resumeLink'>Take a look at my <a href="https://docs.google.com/document/d/17J7e-47XY25hDmlJsdg8uso_YAwcqxTL8uDUWnMpqb4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></h1> 
</div>
</div>
</div>
);
}

export default Resume;
