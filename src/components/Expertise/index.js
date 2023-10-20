import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faDatabase, faThumbsUp, faCircleCheck, faCheck, faUser} from '@fortawesome/free-solid-svg-icons';
import './style.css';
import { faBootstrap, faCss3, faCss3Alt, faGithub, faHtml5, faJs, faNode, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

function Resume() {

return (
    <section className='resumeInfo'>
      <h2>My Skills</h2>
      <div className="developer-section">
            <div className="borderInfo1">

              <FontAwesomeIcon icon={faUser} className="icon"/>
              <h3>Frontend Developer</h3>

              <ol>
                <li>
                  <p><FontAwesomeIcon icon={faCircleCheck} /> HTML5</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faCircleCheck} /> CSS3</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faCircleCheck} /> JavaScript</p>

                </li>
                <li>
                  <p><FontAwesomeIcon icon={faCircleCheck} /> React</p>
                </li>
                <li>

                  <p><FontAwesomeIcon icon={faCircleCheck} /> Bootstrap</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faCircleCheck} /> Jquery</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faCircleCheck} /> Redux</p>
                </li>
              </ol>
            </div>
            <div className="borderInfo1">
              <FontAwesomeIcon icon={faDatabase} className="icon"/>
              <h3>Backend Developer</h3>
              <ol>
                <li>
                  <p><FontAwesomeIcon icon={faCircleCheck} /> Node.js</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faCircleCheck} /> Express.js</p>
                </li>
                <li>
                  <p> <FontAwesomeIcon icon={faCircleCheck} /> MySQL</p>
                </li>
                <li>
                  <p> <FontAwesomeIcon icon={faCircleCheck} /> MongoDB</p>
                </li>
                <li>
                  <p> <FontAwesomeIcon icon={faCircleCheck} /> GraphQL</p>
                </li>
                <li>
                  <p> <FontAwesomeIcon icon={faCircleCheck} /> RESTful API</p>
                </li>
                <li> 
                  <p><FontAwesomeIcon icon={faCircleCheck} /> Mongoose </p>
                  </li>
              </ol>
            </div>
            <div className="borderInfo1">
              <FontAwesomeIcon icon={faThumbsUp} className="icon"/>
              <h3>Tools</h3>
                <ol>
                  <li>
                    <p> <FontAwesomeIcon icon={faCircleCheck} /> Full Stack</p>
                  </li>
                  <li>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Problem Solver</p>
                  </li>
                  <li>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Git</p>
                  </li>
                  <li>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Github</p>
                  </li>
                  <li>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Heroku</p>
                  </li>
                  <li>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> Netlify</p>
                  </li>
                  <li>
                    <p><FontAwesomeIcon icon={faCircleCheck} /> VS Code</p>
                  </li>
                </ol>
            </div>
      </div>

      <div className="technologies">
          <p>Take a look at my <button className="btn">Resume</button></p>


      </div>
    </section>
);
}

export default Resume;
