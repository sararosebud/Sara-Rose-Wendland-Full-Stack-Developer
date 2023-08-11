import { Link, NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="d-flex justify-content-center">
          <div className="nav nav-pills">
          <Link
                  to="https://github.com/sararosebud"
                  target="blank"
                  className="nav-link"
                >
                  Github
                </Link>
                <Link
                  to="https://www.linkedin.com/in/sara-wendland"
                  className="nav-link"
                >
                  LinkedIn
                </Link>
                <Link
                  to="https://stackoverflow.com/users/21433265/rosebudsara"
                  className="nav-link"
                >
                  Stack Overflow
                </Link>
            
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
