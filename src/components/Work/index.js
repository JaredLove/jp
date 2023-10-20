import React from "react";
import "./style.css";

import test from "../../assets/images/arts.jpg";


function Work() {


  return (
    <section className="work-container">
      <h2>Work</h2>
      <div className="work">
        
        <div className="work-content">
          <img src={test} alt="test"/>
          <h1>Watch Time</h1>
          <hr></hr>
          <p>A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
          <p>React Node.js MongoDB</p>
        </div>
        <div className="work-content">
        <img src={test} alt="test"/>
          <h1>Shop-Shop</h1>
          <hr></hr>
          <p>An e-commerce website that allows users to search for products and add them to their cart.</p>
          <p>React Redux MongoDB</p>
        </div>
        <div className="work-content">
        <img src={test} alt="test"/>
          <h1>Weather</h1>
          <hr></hr>
          <p>A weather dashboard that allows users to search for a city and view the current weather and 5 day forecast.</p>
          <p>HTML CSS JavaScript</p>
        </div>
        <div className="work-content">
        <img src={test} alt="test"/>
          <h1>Tech Blog</h1>
          <hr></hr>
          <p>A website that allows users to post and comment on blog posts.</p>
          <p>Handlebars Express Node.js MySQL</p>
        </div>  
        <div className="work-content">
        <img src={test} alt="test"/>
          <h1>Deep Thoughts</h1>
          <hr></hr>
          <p>A social media website that allows users to post thoughts and reactions.</p>
          <p>React Node.js MongoDB Express</p>
        </div>
        <div className="work-content">
        <img src={test} alt="test"/>
          <h1>Password Helper</h1>
          <hr></hr>
          <p>A website that allows users to generate a random password.</p>
          <p>HTML CSS JavaScript</p>
        </div>
        </div>
 </section> 
  );
}

export default Work;