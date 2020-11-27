import React from "react";
import { Link, Redirect } from "react-router-dom";

// reactstrap components
import { Button } from "reactstrap";

// ## DESIGN PART
import "./GraduatedProfile.styles.scss";

// ### REDUX ###
import { connect } from "react-redux";
import PropTypes from "prop-types";

import reactImage from "../../assets/img/unknown_user.png";

class GraduateProfile extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    /* console.log(user); */
    return (
      <>
        {" "}
        {isAuthenticated ? (
          <div className="main-container container border shadow rounded p-3 bg-white">
            <div className="profile-header ml-2 rounded mx-auto">
              <div className="profile-img">
                <img
                  src={
                    user.image
                      ? "http://localhost:5000/" + user.image
                      : reactImage
                  }
                  width={200}
                  alt={user.first_name}
                />
              </div>
              <div className="profile-nav-info ">
                <h3 className="user-name">
                  {user.first_name} {user.last_name}
                </h3>
                <div className="address">
                  <p id="state" className="state">
                    {user.city},
                  </p>
                  <span id="country" className="country">
                    {user.country}
                  </span>
                </div>
                <h5>{user.field_interest}</h5>
              </div>

              <div className="profile-option">
                <Button
                  size="lg"
                  color="default"
                  tag={Link}
                  to={`/graduate/update-profile/${user.id}`}
                >
                  Edit Profile
                </Button>
                <div className="notification"></div>
              </div>
            </div>
            <div className="main-bd">
              <div className="left-side" id="fadeIn">
                <div className="profile-side rounded">
                  {}
                  <div className="user-bio">
                    {}
                    <div className="row justify-content-center d-flex mt-3">
                      {/* condition to render social links */}
                      {/* PERSONAL_WEBSITE */}
                      {user.personal_website ? (
                        <a
                          href={user.personal_website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fa fa-code social-icons ml-1"
                        />
                      ) : null}
                      {/* GITHUB */}
                      {user.github ? (
                        <a
                          href={user.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fa fa-github social-icons ml-1"
                        />
                      ) : null}
                      {/* LINKEDIN */}
                      {user.linkedin ? (
                        <a
                          href={user.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fa fa-linkedin social-icons ml-1"
                        />
                      ) : null}
                      {/* XING */}
                      {user.xing ? (
                        <a
                          href={user.xing}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fa fa-xing social-icons ml-1"
                        />
                      ) : null}
                      {/* EMAIL */}
                      {user.email ? (
                        <a
                          href={`mailto:${user.email}`}
                          className="fa fa-envelope social-icons ml-1"
                        />
                      ) : null}
                    </div>
                    {/* QUOTE */}
                    {user.quote ? (
                      <h5 className="text-center" id="slogan">
                        {user.quote}
                      </h5>
                    ) : null}
                    <div className="row justify-content-center p-3 p-3">
                      {user.tech_skills
                        ? user.tech_skills.map((skill, index) => (
                            <span
                              key={index}
                              className="badge badge-info ml-1 mt-1"
                            >
                              {skill}
                            </span>
                          ))
                        : null}
                    </div>
                  </div>
                  <div className="profile-btn justify-content-center">
                    <button
                      to="/form-profile"
                      tag={Link}
                      className="chatbtn text-small"
                      id="chatBtn"
                    >
                      <i className="fa fa-comment" />
                      Inbox
                    </button>
                    <button className="createbtn" id="view-CV">
                      <i className="fa fa-plus" /> View CV
                    </button>
                  </div>
                </div>
              </div>
              <div className="right-side mr-4 justify-content-center">
                <div
                  className="profile-body border shadow rounded bg-white ml-3"
                  id="fadeIn2"
                >
                  <div className="profile-posts tab">
                    <h1 id="bio">About Me</h1>
                    <p>{user.about_me}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Redirect to="/auth/login" />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(GraduateProfile);
