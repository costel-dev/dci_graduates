import React, { useState } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Badge,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import "./searchFilterCard.styles.scss";
// material-ui icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "@material-ui/core";

import reactImage from "../../assets/img/unknown_user.png";

const SearchFilterCards = ({ graduate }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Col xl="12" style={{ marginTop: "80px" }}>
        <Card className="card-profile shadow">
          <Row className="justify-content-center">
            <Col className="order-lg-2" xl="12">
              <div className="card-profile-image">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt={graduate.first_name}
                    className="rounded-circle"
                    src={
                      graduate.image
                        ? "http://localhost:5000/" + graduate.image
                        : reactImage
                    }
                  />
                </a>
              </div>
            </Col>
          </Row>
          <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></CardHeader>
          <CardBody className="pt-0 pt-md-4">
            <div className="text-center mt-md-6">
              <h3>
                <span className="font-weight-light">
                  {graduate.first_name} {graduate.last_name},{" "}
                  {graduate.class_name}
                </span>
              </h3>
              <div className="h5 font-weight-300">
                {graduate.city}, {graduate.country}
              </div>
              <div className="h5 mt-4">{graduate.field_interest}</div>
              <div>
                <Row>
                  {graduate.tech_skills
                    ? graduate.tech_skills.map((skill, index) => (
                        <Col key={index}>
                          <Badge color="primary">{skill}</Badge>
                        </Col>
                      ))
                    : null}
                </Row>
              </div>
              <Row>
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center">
                    {/* EMAIL */}
                    {graduate.email ? (
                      <div>
                        <a href={`mailto:${graduate.email}`}>
                          <MailIcon />
                        </a>
                      </div>
                    ) : null}
                    {/* GITHUB */}
                    {graduate.github ? (
                      <div>
                        <a
                          href={graduate.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubIcon />
                        </a>
                      </div>
                    ) : null}
                    {/* LINKEDIN */}
                    {graduate.linkedin ? (
                      <div>
                        <a
                          href={graduate.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <LinkedInIcon />
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
              </Row>
              <hr className="my-3" />
              <div className="d-flex justify-content-between">
                <Button
                  className="mr-4"
                  color="info"
                  href="#pablo"
                  onClick={toggle}
                  size="sm"
                >
                  View Profile
                </Button>
                {/* Modal */}
                <Modal isOpen={modal} toggle={toggle} size="lg">
                  <ModalHeader toggle={toggle}></ModalHeader>
                  <ModalBody>
                    <div className="container border shadow rounded p-3 bg-light">
                      <div className="profile-header ml-2 rounded mx-auto">
                        <div className="profile-img">
                          <img
                            src={
                              graduate.image
                                ? "http://localhost:5000/" + graduate.image
                                : reactImage
                            }
                            width={200}
                            alt={graduate.first_name}
                          />
                        </div>
                        <div className="profile-nav-info ">
                          <h3 className="user-name">
                            {graduate.first_name} {graduate.last_name}
                          </h3>
                          <div className="address">
                            <p id="state" className="state">
                              {graduate.city},
                            </p>
                            <span id="country" className="country">
                              {graduate.country}.
                            </span>
                          </div>
                          <h5 className>{graduate.field_interest}</h5>
                        </div>
                      </div>
                      <div className="main-bd">
                        <div className="left-side" id="fadeIn">
                          <div className="profile-side rounded">
                            {}
                            <div className="user-bio">
                              {}
                              <div className="row justify-content-center d-flex mt-3">
                                {/* Conditional rendering */}
                                {/* PERSONAL_WEBSITE */}
                                {graduate.personal_website ? (
                                  <Link
                                    href={graduate.personal_website}
                                    target="_blank"
                                    rel="noopener"
                                    className="fa fa-code social-icons ml-1"
                                  />
                                ) : null}
                                {/* GITHUB */}
                                {graduate.github ? (
                                  <Link
                                    href={graduate.github}
                                    target="_blank"
                                    rel="noopener"
                                    className="fa fa-github social-icons ml-1"
                                  />
                                ) : null}
                                {/* LINKEDIN */}
                                {graduate.linkedin ? (
                                  <Link
                                    href={graduate.linkedin}
                                    target="_blank"
                                    rel="noopener"
                                    className="fa fa-linkedin social-icons ml-1"
                                  />
                                ) : null}
                                {/* XING */}
                                {graduate.xing ? (
                                  <Link
                                    href={graduate.xing}
                                    target="_blank"
                                    rel="noopener"
                                    className="fa fa-xing social-icons ml-1"
                                  />
                                ) : null}
                                {/* EMAIL */}
                                {graduate.email ? (
                                  <Link
                                    href={`mailto:${graduate.email}`}
                                    className="fa fa-envelope social-icons ml-1"
                                  />
                                ) : null}
                              </div>
                              <h5 className="text-center">
                                {graduate.quote ? graduate.quote : null}
                              </h5>
                              {}
                              <div className="row justify-content-center mb-3">
                                {graduate.tech_skills
                                  ? graduate.tech_skills.map((skill, index) => (
                                      <span
                                        key={index}
                                        className="badge badge-info mt-1 ml-1"
                                      >
                                        {skill}
                                      </span>
                                    ))
                                  : null}
                              </div>
                            </div>
                            <div className="profile-btn dropdown">
                              <button
                                className="chatbtn text-small"
                                id="chatBtn"
                              >
                                <i className="fa fa-comment" />
                                Contact
                              </button>
                              <button className="createbtn" id="view-CV">
                                {graduate.seeking
                                  ? graduate.seeking
                                  : "Unavailable"}
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="right-side mr-4 justify-content-center">
                          <div
                            className="profile-body border shadow rounded bg-light ml-3"
                            id="fadeIn2"
                          >
                            <div className="profile-reviews tab">
                              <h1 id="contact">About Me</h1>
                              <p>{graduate.about_me && graduate.about_me}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                      Download CV
                    </Button>{" "}
                    <Button color="secondary" onClick={toggle}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
                {/* End of Modal */}
                {graduate.seeking ? (
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    {graduate.seeking}
                  </Button>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default SearchFilterCards;
