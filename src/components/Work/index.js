import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faFolder, faExternalLinkSquare} from '@fortawesome/free-solid-svg-icons';

function Work() {

  return (
    <div className="work">
<h1 className='workH1'><span className='navSign'>( )</span> My Work</h1>
   
    
    <div className='images'>
      
      <div className="workContainerWrapper">
      <div className="workTop">
        <div className="folder">
          <FontAwesomeIcon icon={faFolder} />
        </div>
        <div className="projectLinks">
          <a href="https://github.com/JaredLove/Watch--Time" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://watch-time-app.herokuapp.com/" target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
        </div>
      </div>
      <div className="workContent">
        <h3 className="projectTitle">Watch Time</h3>
        <p className="projectDescription">A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
    </div>
    <div className="workBottom">
 
        <p>React Node.js MongoDB</p>

    </div>
    </div>

      
    <div className="workContainerWrapper">
      <div className="workTop">
        <div className="folder">
          <FontAwesomeIcon icon={faFolder} />
        </div>
        <div className="projectLinks">
          <a href="https://github.com/JaredLove/shop-shop" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://shop-shop-ca0de965b57a.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
        </div>
      </div>
      <div className="workContent">
        <h3 className="projectTitle">Shop-Shop</h3>
        <p className="projectDescription">An e-commerce website that allows users to search for products and add them to their cart.</p>

    </div>

    <div className="workBottom">
 
        <p>React Redux MongoDB</p>

    </div>
    </div>
    <div className="workContainerWrapper">
      <div className="workTop">
        <div className="folder">
          <FontAwesomeIcon icon={faFolder} />
        </div>
        <div className="projectLinks">
          <a href="https://github.com/JaredLove/Weather-Dashboard" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://jaredlove.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
        </div>
      </div>
      <div className="workContent">
        <h3 className="projectTitle">Weather Dashboard</h3>
        <p className="projectDescription">A website that allows users to search for the current weather and 5 day forecast of a city.</p>
    </div>
    <div className="workBottom">
 
        <p>HTML CSS JavaScript</p>

    </div>
    </div>
    <div className="workContainerWrapper">
      <div className="workTop">
        <div className="folder">
          <FontAwesomeIcon icon={faFolder} />
        </div>
        <div className="projectLinks">
          <a href="https://github.com/JaredLove/tech-news" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://tech-n-7d7c9093be4f.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
        </div>
      </div>
      <div className="workContent">
        <h3 className="projectTitle">Tech Blog</h3>
        <p className="projectDescription">A website that allows users to create an account and post blogs about the latest tech news.</p>
    </div>
    <div className="workBottom">
 
        <p>Node.js Express Handlebars SQL</p>

    </div>
    </div>
    <div className="workContainerWrapper">
      <div className="workTop">
        <div className="folder">
          <FontAwesomeIcon icon={faFolder} />
        </div>
        <div className="projectLinks">
          <a href="https://github.com/JaredLove/deep-thought" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://thoughts-deep-1f5c4f30bbf9.herokuapp.com/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
        </div>
      </div>
      <div className="workContent">
        <h3 className="projectTitle">Deep Thoughts</h3>
        <p className="projectDescription">A website that allows users to create an account, post thoughts and react to other users thoughts.</p>
    </div>

    <div className="workBottom">
 
        <p>React Node.js Express MongoDB</p>

    </div>
    </div>
    <div className="workContainerWrapper">
      <div className="workTop">
        <div className="folder">
          <FontAwesomeIcon icon={faFolder} />
        </div>
        <div className="projectLinks">
          <a href="https://github.com/JaredLove/Password-Generator" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://jaredlove.github.io/Password-Generator/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faExternalLinkSquare} /></a>
        </div>
      </div>
      <div className="workContent">
        <h3 className="projectTitle">Password Generator</h3>
        <p className="projectDescription">A website that allows users to generate a random password based on their criteria.</p>
    </div>
    <div className="workBottom">
 
        <p>HTML CSS JavaScript</p>

    </div>

    </div>

  </div>
 </div>
  );
}

export default Work;