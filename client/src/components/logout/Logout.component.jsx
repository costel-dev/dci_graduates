import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { NavItem, NavLink } from "reactstrap";

// ### REDUX ###
import { connect } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import PropTypes from "prop-types";

class Logout extends React.Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };
  render() {
    return (
      <>
        <NavItem>
          <NavLink
            onClick={this.props.logout}
            className="nav-link-icon"
            to="/"
            tag={Link}
          >
            <i className="ni ni-notification-70" />
            <span className="nav-link-inner--text">Logout</span>
          </NavLink>
        </NavItem>
      </>
    );
  }
}

export default connect(null, { logout })(Logout);
