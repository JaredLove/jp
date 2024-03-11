import React from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";

function Resume() {

return (
    <section className='resume-container'>
      <div className="header-two">
        <div>
          <h2>SERVICES</h2>
        </div>
                
      </div>

        <ul >
            <li>
            <div className="service-head">
                <span className="num-icon">01</span>
                <FontAwesomeIcon icon={faLaptopCode} className="icon-res"  />
              </div>
              <h3>Frontend Dev</h3>
              <p>
              Enthusiastic about crafting seamless user interfaces and experiences, I bring over two years of hands-on development expertise in front-end technologies, including HTML, CSS, JavaScript, and React.</p> 
            </li>

            <li>
              <div className="service-head">
                <span className="num-icon">02</span>
                <FontAwesomeIcon icon={faDatabase} className="icon-res"  />
              </div>
              
              <h3>Backend Dev</h3>  
              <p>
              Dedicated to building robust and scalable server-side applications, I possess over two years of experience in back-end development, specializing in technologies such as Node.js, Express, MongoDB, and SQL.</p>
            </li>

            <li>
            <div className="service-head">
                <span className="num-icon">03</span>
                <FontAwesomeIcon icon={faServer} className="icon-res" />
              </div>
              <h3>IT Support</h3>
              <p>Committed to delivering exceptional technical support and IT solutions,specializing in troubleshooting, network management, and end-user support. </p>
            </li>



        </ul>
    </section>
);
}

export default Resume;
