import React from "react";
import { Link, Redirect } from "react-router-dom";
// ## Design Elements
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserNavbar.styles.scss";
import Logo from "../../assets/img/brand/dci-graduatesLogo.png";
import LogoWhite from "../../assets/img/brand/dci-graduatesLogo_white.png";
import Logout from "../logout/Logout.component";

// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// ### REDUX ###
import { connect } from "react-redux";
import PropTypes from "prop-types";

class UserNavbar extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <>
        {" "}
        {user ? (
          <>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                to="/graduate/profile"
                tag={Link}
              >
                <i className="ni ni-notification-70" />
                <span
                  className="nav-link-inner--text"
                  style={{ color: "#172b4d" }}
                >
                  {" "}
                  {user.first_name} {user.last_name}
                </span>
              </NavLink>
            </NavItem>
            <Redirect to={"/graduate/profile/"} />
            <Logout />{" "}
          </>
        ) : (
            ""
          )}
      </>
    );

    const guestLinks = (
      <>
        <NavItem>
          <NavLink
            className="nav-link-icon border text-white bg-default btn-shadow btn btn-lg p-1 col-lg-12 col-sm-2"
            to="/auth/login"
            tag={Link}
          >
            <span className="nav-link-inner--text " style={{ color: "#fff" }}>
              {" "}
              <i className="fa fa-sign-in" aria-hidden="true"></i> Login
            </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link-icon border text-white bg-default btn-shadow btn btn-lg p-1 col-lg-12 col-sm-2"
            to="/auth/register"
            tag={Link}
          >
            <span className="nav-link-inner--text" style={{ color: "#ffffff" }}>
              {" "}
              <i className="fa fa-user-plus" aria-hidden="true"></i>
              Register
            </span>
          </NavLink>
        </NavItem>
      </>
    );
    return (
      <>
        <Navbar
          className="navbar-horizontal navbar-light bg-transparent"
          fixed="top"
          expand="lg"
        >
          <Container fluid={true}>
            <NavbarBrand to="/" tag={Link}>
              <img
                className="logo bg-default shadow-lg rounded p-2"
                src={LogoWhite}
                alt="Logo"
                style={{ height: "60px", opacity: 0.9, }}
              />
            </NavbarBrand>
            <button
              aria-controls="navbar-light"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler text-white"
              data-target="#navbar-light"
              data-toggle="collapse"
              id="navbar-light"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-light ">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img alt="..." src={Logo} style={{ height: "6vw" }} />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-default"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-light"
                      data-toggle="collapse"
                      id="navbar-light"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto" navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(UserNavbar);
