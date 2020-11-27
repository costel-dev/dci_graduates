import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Badge,
} from "reactstrap";
// material-ui icons
import GitHubIcon from "@material-ui/icons/GitHub";

const GraduateCard = () => {
  return (
    <div>
      <Col
        className="order-xl-2 mb-5 mb-xl-0"
        xl="12"
        style={{ marginTop: "10vh" }}
      >
        <Card className="card-profile shadow">
          <Row className="justify-content-center">
            <Col className="order-lg-2" lg="3">
              <div className="card-profile-image">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={require("../../assets/img/theme/team-4-800x800.jpg")}
                  />
                </a>
              </div>
            </Col>
          </Row>
          <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></CardHeader>
          <CardBody className="pt-0 pt-md-4">
            <Row>
              <div className="col">
                <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                  <div>
                    <span className="heading">22</span>
                    <GitHubIcon />
                  </div>
                  <div>
                    <span className="heading">10</span>
                    <span className="description">Photos</span>
                  </div>
                  <div>
                    <span className="heading">89</span>
                    <span className="description">Comments</span>
                  </div>
                </div>
              </div>
            </Row>
            <div className="text-center">
              <h3>
                Costel Cuconoiu
                <span className="font-weight-light">, 34</span>
              </h3>
              <div className="h5 font-weight-300">
                {/* <i className="ni location_pin mr-2" /> */}
                Duisburg, Germany
              </div>
              <div className="h5 mt-4">
                {/* <i className="ni business_briefcase-24 mr-2" /> */}
                Web developer
              </div>
              <div>
                {/* <i className="ni education_hat mr-2" /> */}
                <Row>
                  <Col>
                    <Badge color="primary">HTML5</Badge>
                  </Col>
                  <Col>
                    <Badge color="primary">HTML5</Badge>
                  </Col>
                  <Col>
                    <Badge color="primary">HTML5</Badge>
                  </Col>
                  <Col>
                    <Badge color="primary">HTML5</Badge>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
              <div className="d-flex justify-content-between">
                <Button
                  className="mr-4"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  View Profile
                </Button>
                <Button
                  className="float-right"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  Message
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default GraduateCard;
