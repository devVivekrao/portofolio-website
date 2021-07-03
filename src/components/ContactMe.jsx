import React from "react";
import Github from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import Instagram from "../assets/icons/instagram.svg";
import Twitter from "../assets/icons/twitter.svg";

function ContactMe() {
  return (
    <div className="contact-me">
      <h3>Contact me</h3>
      <p>
        My inbox is always open. whether you have a question or just want to say
        hi, I'll try my best to get back to you.
      </p>
      <div className="grid">
        <a
          href="https://github.com/devVivekrao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="github" className="github" />
        </a>
        <a
          href="https://github.com/devVivekrao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="linkedin" className="linkedin" />
        </a>
        <a
          href="https://www.instagram.com/_vivo_89/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="instagram" className="instagram" />
        </a>
        <a
          href="https://twitter.com/devVivekrao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Twitter} alt="twiteer" className="twiteer" />
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
