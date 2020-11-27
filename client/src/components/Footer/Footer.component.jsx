import React from "react";

// reactstrap components
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import "./footer.styles.scss";

class MyFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer-distributed">
          <div className="footer-right">
            <NavItem>
              <a
                href="https://digitalcareerinstitute.org/courses"
                target="_blank"
                rel="noopener noreferrer"
              >
                DCI Courses
              </a>
            </NavItem>
          </div>

          <div className="footer-left">
            <div className="footer-links">
              <div className="row text-muted ml-2">
                © 2020
                <Link
                  tag={Link}
                  to="/team-page"
                  className="font-weight-bold ml-1"
                >
                  <FadeIn />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default MyFooter;
