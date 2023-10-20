import React from "react";
import "./style.css"
import FontAwesome from "react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Footer() {
  return (
    <footer>
        <section className="connect">
          <h2>Wanna get a coffee and chat? You can find me in these places to get in touch.</h2>
          <ul className="social">
            <li>
              <a href="https://www.linkedin.com/in/jared-love-188479241/" target="_blank" rel="noreferrer" className="btn">
              Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/JaredLove" target="_blank" rel="noreferrer" className="btn">
                Github
              </a>
            </li>
            <li>
              <a href="mailto:lovejared91@Yahoo.com" target="_blank" rel="noreferrer" className="btn">
                Email
              </a>
            </li>
            </ul>
        </section>
    </footer>
  );
}

export default Footer;