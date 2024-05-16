import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>
            not &copy; {new Date().getFullYear()} Bhanuka Siriwardana. no rights
            reserved (i think)
          </p>
          <p>not affliated with miHoYo</p>
          <p>
            This Project is hosted on{" "}
            <a href="https://github.com/bhanukaaa/GenshinCalendar">GitHub</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
