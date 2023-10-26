import React from "react";
import "./style.css";


function Work() {


  return (
    <section className="work-container">
      <h2>My Work</h2>
      <div className="work">
        
        <div className="work-content" id="work-content">
          <h1>Watch Time</h1>
          <hr></hr>
          <p>A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
          <p>React Node.js MongoDB</p>
          <div className="links">
          <a href="https://watch-time-app.herokuapp.com/" target="_blank"  rel="noreferrer" >Heroku</a>
          <a href="https://github.com/JaredLove/Watch--Time" target="_blank"  rel="noreferrer" >GitHub</a>
          </div>
        </div>
        <div className="work-content">
          <h1>Shop-Shop</h1>
          <hr></hr>
          <p>An e-commerce website that allows users to search for products and add them to their cart.</p>
          <p>React Redux MongoDB</p>
          <div className="links">
          <a href="https://shop-shop-ca0de965b57a.herokuapp.com/" target="_blank"  rel="noreferrer" >Heroku</a>
          <a href="https://github.com/JaredLove/shop-shop" target="_blank"  rel="noreferrer" >GitHub</a>
          </div>
        </div>
        <div className="work-content">
          <h1>Weather</h1>
          <hr></hr>
          <p>A weather dashboard that allows users to search for a city and view the current weather and 5 day forecast.</p>
          <p>HTML CSS JavaScript</p>
          <div className="links">
          <a href="https://jaredlove.github.io/Weather-Dashboard/" target="_blank"  rel="noreferrer">Live Site</a>
          <a href="https://github.com/JaredLove/Weather-Dashboard" target="_blank"  rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div className="work-content">
          <h1>Tech Blog</h1>
          <hr></hr>
          <p>A website that allows users to post and comment on blog posts.</p>
          <p>Handlebars Express Node.js MySQL</p>
          <div className="links">
          <a href="https://tech-n-7d7c9093be4f.herokuapp.com/" target="_blank"  rel="noreferrer">Heroku</a>
          <a href="https://github.com/JaredLove/tech-news" target="_blank"  rel="noreferrer">GitHub</a>
          </div>
        </div>  
        <div className="work-content">
          <h1>Deep Thoughts</h1>
          <hr></hr>
          <p>A social media website that allows users to post thoughts and reactions.</p>
          <p>React Node.js MongoDB Express</p>
          <div className="links">
          <a href="https://thoughts-deep-1f5c4f30bbf9.herokuapp.com/" target="_blank"  rel="noreferrer">Heroku</a>
          <a href="https://github.com/JaredLove/deep-thoughts" target="_blank"  rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div className="work-content">
          <h1>Password Helper</h1>
          <hr></hr>
          <p>A website that allows users to generate a random password.</p>
          <p>HTML CSS JavaScript</p>
          <div className="links">
          <a href="https://jaredlove.github.io/Password-Generator/" target="_blank" rel="noreferrer">Live Site</a>
          <a href="https://github.com/JaredLove/Password-Generator" target="_blank"  rel="noreferrer">GitHub</a>
          </div>
        </div>
        </div>
 </section> 
  );
}

export default Work;