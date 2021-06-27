import React from "react";
import Heart from "../assets/icons/heart.svg";

function ContactMe() {
  return (
    <footer className="footer">
      <div className="grid">
        <p>copyright &copy; 2021 @vivekrao.dev</p>
        <p>
          {" "}
          design and built by Vivek rao with
          <img src={Heart} alt="heart" />{" "}
        </p>
      </div>
    </footer>
  );
}

export default ContactMe;
