import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faThumbsUp, faCircleCheck, faUser} from '@fortawesome/free-solid-svg-icons';
import './style.css';

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
                  <p><FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>HTML5</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>CSS3</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>JavaScript</p>

                </li>
                <li>
                  <p><FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>React</p>
                </li>
                <li>

                  <p><FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>Bootstrap</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>Jquery</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>Redux</p>
                </li>
              </ol>
            </div>
            <div className="borderInfo1">
              <FontAwesomeIcon icon={faDatabase} className="icon"/>
              <h3>Backend Developer</h3>
              <ol>
                <li>
                  <p><FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>Node.js</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>Express.js</p>
                </li>
                <li>
                  <p> <FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>MySQL</p>
                </li>
                <li>
                  <p> <FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>MongoDB</p>
                </li>
                <li>
                  <p> <FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>GraphQL</p>
                </li>
                <li>
                  <p> <FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>REST</p>
                </li>
                <li> 
                  <p><FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>Mongoose </p>
                  </li>
              </ol>
            </div>
            <div className="borderInfo1">
              <FontAwesomeIcon icon={faThumbsUp} className="icon"/>
              <h3>Tools</h3>
                <ol>
                  <li>
                    <p> <FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>Full Stack</p>
                  </li>
                  <li>
                    <p><FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>Collaboration</p>
                  </li>
                  <li>
                    <p><FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>Git</p>
                  </li>
                  <li>
                    <p><FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>Github</p>
                  </li>
                  <li>
                    <p><FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>Heroku</p>
                  </li>
                  <li>
                    <p><FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>Netlify</p>
                  </li>
                  <li>
                    <p><FontAwesomeIcon icon={faCircleCheck} /><span className="p"></span>VS Code</p>
                  </li>
                </ol>
            </div>
      </div>

      <div className="technologies">
          <p>Take a look at my <a href="https://docs.google.com/document/d/e/2PACX-1vTj_G_zMfLDdIH0LuF3UZjn0SaTQf8NjAnTxhap7YykgvhhOlZ48qiw7WP4hUEDerdjfShkr_yQplXf/pub" target="_blank" rel="noreferrer"><button className="btn" >Resume</button></a></p>


      </div>
    </section>
);
}

export default Resume;
