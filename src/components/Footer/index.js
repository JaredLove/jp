import React from "react";
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Footer() {
  return (
    <footer>
        <section className="connect">
          <div className="header-two">
            <h2>CONNECT</h2>
          </div>
          <h2>HAVE AN IDEA?</h2>
          <h2 className="color-change">LET'S BUILD SOMETHING!</h2>
          <ul className="social">
          <li>
                  <a href='https://www.linkedin.com/in/jared-love-188479241/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </li>
                <li>
                  <a href='https://github.com/JaredLove' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                </li>
                <li>
                  <a href='https://twitter.com/404Jared' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
                </li>
                <li>
                  <a href="mailto:lovejared91@Yahoo.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
                </li>
            </ul>
        </section>
    </footer>
  );
}

export default Footer;