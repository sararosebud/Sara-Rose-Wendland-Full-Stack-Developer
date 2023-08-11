import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="d-flex justify-content-center">
          <div className="nav nav-pills">
            {/* Use 'a' tag for external links */}
            <a
              href="https://github.com/sararosebud"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/sara-wendland"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              LinkedIn
            </a>
            <a
              href="https://stackoverflow.com/users/21433265/rosebudsara"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Stack Overflow
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
