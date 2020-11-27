import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Badge,
  Container,
} from "reactstrap";

const TeamPage = () => {
  return (
    <Container>
      {/* Costel */}
      <Row className="mt-8">
        <Col xl="4" lg="4" md="6" sm="8" xs="12" style={{ marginTop: "10vh" }}>
          <Card className="card-profile shadow">
            <Row className="justify-content-center">
              <Col className="order-lg-2" lg="3">
                <div className="card-profile-image">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("../../assets/img/team/Costel.jpg")}
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
                      <span className="description">Projects</span>
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
                      <Badge color="primary">CSS3</Badge>
                    </Col>
                    <Col>
                      <Badge color="primary">JAVASCRIPT</Badge>
                    </Col>
                    <Col>
                      <Badge color="primary">JQUERY</Badge>
                    </Col>
                    <Col>
                      <Badge color="primary">REACTJS</Badge>
                    </Col>
                    <Col>
                      <Badge color="primary">NODEJS</Badge>
                    </Col>
                    <Col>
                      <Badge color="primary">MONGODB</Badge>
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

        {/* Cristi */}
        <Col xl="4" lg="4" md="6" sm="8" xs="12" style={{ marginTop: "10vh" }}>
          <Card className="card-profile shadow">
            <Row className="justify-content-center">
              <Col className="order-lg-2" lg="3">
                <div className="card-profile-image">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("../../assets/img/unknown_user.png")}
                    />
                  </a>
                </div>
              </Col>
            </Row>
            <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></CardHeader>
            <CardBody className="pt-0 pt-md-4">
              <div className="text-center">
                <h3>
                  Cristian-Adrian Teslea
                  <span className="font-weight-light">, 29 </span>
                  <span className="font-weight-light">, 29</span>
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

        {/* Kris */}
        <Col xl="4" lg="4" md="6" sm="8" xs="12" style={{ marginTop: "10vh" }}>
          <Card className="card-profile shadow">
            <Row className="justify-content-center">
              <Col className="order-lg-2" lg="3">
                <div className="card-profile-image">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("../../assets/img/team/Kriss.jpg")}
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
                      <span className="description">Projects</span>
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
                  Kristof Meyer
                  <span className="font-weight-light">, 40</span>
                </h3>
                <div className="h5 font-weight-300">
                  {/* <i className="ni location_pin mr-2" /> */}
                  Duisburg, Germany
                </div>
                <div className="h5 mt-4">
                  {/* <i className="ni business_briefcase-24 mr-2" /> */}
                  Web developer / Web Designer
                </div>
                <div>
                  {/* <i className="ni education_hat mr-2" /> */}
                  <Row>
                    <Col>
                      <Badge color="primary">HTML5</Badge>
                    </Col>
                    <Col>
                      <Badge color="primary">CSS3</Badge>
                    </Col>
                    <Col>
                      <Badge color="primary">JAVASCRIPT</Badge>
                    </Col>
                    <Col>
                      <Badge color="primary">JQUERY</Badge>
                    </Col>
                    <Col>
                      <Badge color="primary">REACTJS</Badge>
                    </Col>
                    <Col>
                      <Badge color="primary">NODEJS</Badge>
                    </Col>
                    <Col>
                      <Badge color="primary">MONGODB</Badge>
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
        {/* End */}
      </Row>
    </Container>
  );
};

export default TeamPage;
