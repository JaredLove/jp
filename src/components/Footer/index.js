import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub ,  faLinkedin} from '@fortawesome/free-brands-svg-icons';
import "./style.css";

function Footer() {
    return (
    <footer>

        <div className="workTogether">
            <div>
            <h2>Lets work <span className="gy">together?</span></h2>      
            <p>I'm always looking for new opportunities, whether you have a job for me
            or just want to say hello, my inbox is just a click away. I'll try my best
            to get back to you.
            </p>
            <div className="btnWrapper">
            <a href = "mailto: lovejared91@yahoo.com"><button className="contactBtn">Send Email</button></a>
            </div>
            </div>
            <div className="footer-links">
                <h2>Check me out <span className="gy">here:</span> </h2>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/jared-love-188479241/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a> 
                    </li>           
                    <li>
                        <a href="https://github.com/JaredLove" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                    </li> 
                    

                </ul>
            

            </div>

        </div>

    </footer>
    );
    }

export default Footer;