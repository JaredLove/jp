import React from "react";
import "./style.css";
import { GoArrowUpRight } from "react-icons/go";
function Work() {


  return (
    <section className="work-container">


      <div className="header-one">
      <h2>PROJECTS</h2>
      </div>

      <ul className="work">
        
      <li className="watch-container">
          <div className="work-content">
            <div className="work-content-head">
              <h2>Watch Time</h2>
            </div>
            
            <div className="work-content-foot">
              <h3>Developer</h3>
              <p>A website that allows users to search for movies and TV shows and save them to their watchlist.</p>
              <p>React Node.js MongoDB</p>
              <div className="links">
              <button><a href="https://watch-time-app.herokuapp.com/" target="_blank"  rel="noreferrer" >Live <GoArrowUpRight /></a></button>
              <button><a href="https://github.com/JaredLove/Watch--Time" target="_blank"  rel="noreferrer" >GitHub <GoArrowUpRight /></a >  </button>   
            </div>   
          </div>
          </div>
        </li> 
        <li className="shop-container">
          <div className="work-content">
          <div className="work-content-head">
          <h2>Shop-Shop</h2>
          </div>
          <div className="work-content-foot">
          <h3>Developer</h3>
          <p>An e-commerce website that allows users to search for products and add them to their cart.</p>
          <p>React Redux MongoDB</p>
          <div className="links">
          <button><a href="https://shop-shop-ca0de965b57a.herokuapp.com/" target="_blank"  rel="noreferrer" >Live <GoArrowUpRight /></a></button>
          <button><a href="https://github.com/JaredLove/shop-shop" target="_blank"  rel="noreferrer" >GitHub <GoArrowUpRight /></a></button>
          </div>
          </div>
          </div>
        </li>  

        <li className="tech-container">  
          <div className="work-content">
          <div className="work-content-head">
          <h2>Tech Blog</h2>
          </div>
          <div className="work-content-foot">
          <h3>Developer</h3>
          <p>A website that allows users to post and comment on blog posts.</p>
          <p>Handlebars Express Node.js MySQL</p>
          <div className="links">
          <button><a href="https://tech-n-7d7c9093be4f.herokuapp.com/" target="_blank"  rel="noreferrer">Live <GoArrowUpRight /></a></button>
          <button><a href="https://github.com/JaredLove/tech-news" target="_blank"  rel="noreferrer">GitHub <GoArrowUpRight /></a></button>
          </div>
          </div>
          </div>
        </li>   
         <li className="thoughts-container">
          <div className="work-content">
          <div className="work-content-head">
          <h2>Deep Thoughts</h2>
          </div>
          <div className="work-content-foot">
          <h3>Developer</h3>
          <p>A social media website that allows users to post thoughts and reactions.</p>
          <p>React Node.js MongoDB Express</p>
          <div className="links">
          <button><a href="https://thoughts-deep-1f5c4f30bbf9.herokuapp.com/" target="_blank"  rel="noreferrer">Live <GoArrowUpRight /></a></button>
          <button><a href="https://github.com/JaredLove/deep-thought" target="_blank"  rel="noreferrer">GitHub <GoArrowUpRight /></a></button>
          </div>
          </div>
          </div>
        </li>  

        </ul> 
 </section> 
  );
} 

export default Work;