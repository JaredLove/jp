import React from "react";
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
            <a href = "mailto: abc@example.com"><button className="contactBtn">Send Email</button></a>
            </div>
            </div>

        </div>

    </footer>
    );
    }

export default Footer;