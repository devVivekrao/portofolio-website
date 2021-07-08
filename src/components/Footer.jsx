import React from "react";
import Heart from "../assets/icons/heart.svg";

function ContactMe() {
  return (
    <footer className="footer">
      <div className="grid">
        <p>
          {" "}
          design and built by Vivek rao with
          <img src={Heart} alt="heart" />{" "}
        </p>
        <p>&copy; 2021 vivekrao. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default ContactMe;
