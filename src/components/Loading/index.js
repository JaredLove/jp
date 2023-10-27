import React from 'react';
import './style.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="content">
        <h1>Jared Love</h1>
        <div className="cycle-text">
          <span className="developer">Developer</span>
          <br></br>
          <span className="coffee-enthusiast">Coffee Enthusiast</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;