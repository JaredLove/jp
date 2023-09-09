import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub ,  faLinkedin} from '@fortawesome/free-brands-svg-icons';
  

function Footer() {
    return (
    <footer>

        <div className="workTogether">
            <div>
            <h2>Lets work <span className="red">together?</span></h2>      
            <p>I'm always looking for new opportunities, whether you have a job for me
            or just want to say hello, my inbox is just a click away. I'll try my best
            to get back to you.
            </p>
            <div className="btnWrapper">
            <a href = "mailto: abc@example.com"><button>Send Email</button></a>
            </div>
            </div>

        </div>

        <div className="social">
            <div>
            <h2>Find me on <span className="red">social media:</span></h2>  
            <div className="btnWrapperIcons">
            <a href='https://github.com/JaredLove' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
            <a href='https://www.linkedin.com/in/jared-love-188479241/' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            </div>
        </div>

    </footer>
    );
    }

export default Footer;