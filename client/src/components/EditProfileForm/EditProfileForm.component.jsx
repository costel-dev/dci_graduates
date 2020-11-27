import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

// ### REDUX ###
import { connect } from "react-redux";
import PropTypes from "prop-types";

class EditProfileForm extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };
  render() {
    const { user } = this.props.auth;

    if (user) {
      console.log(user);
    }

    return (
      <>
        {" "}
        {user ? (
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Save Profile
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first_name"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.first_name}
                            id="input-first_name"
                            placeholder="First name"
                            type="text"
                            name="first_name"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last_name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.last_name}
                            id="input-last_name"
                            placeholder="Last name"
                            type="text"
                            name="last_name"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-class_name"
                          >
                            Class name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.class_name}
                            id="input-class_name"
                            placeholder="Class name"
                            type="text"
                            name="class_name"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.email}
                            id="input-email"
                            placeholder="Email address"
                            type="email"
                            name="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.address}
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                            name="address"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.city}
                            id="input-city"
                            placeholder="City"
                            type="text"
                            name="city"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.country}
                            id="input-country"
                            placeholder="Country"
                            type="text"
                            name="country"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.zip}
                            id="input-zip"
                            placeholder="Postal code"
                            type="number"
                            name="zip"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                          Open Source."
                        type="textarea"
                        name="about_me"
                      />
                    </FormGroup>
                  </div>
                  <hr className="my-4" />
                  {/* Skills */}
                  <h6 className="heading-small text-muted mb-4">Skill tree</h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-field_interest"
                          >
                            Field of Interest
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.field_interest}
                            id="input-field_interest"
                            placeholder="Enter your field"
                            type="text"
                            name="field_interest"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-tech_skills"
                          >
                            Tech Skills
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="React"
                            id="input-tech_skills"
                            placeholder="Your Tech Skills"
                            type="text"
                            name="tech_skills"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-seeking"
                          >
                            Seeking
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={user.seeking}
                            id="input-seeking"
                            placeholder="Seeking for..."
                            type="text"
                            name="seeking"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Social Links */}
                  <h6 className="heading-small text-muted mb-4">
                    Social Links
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-personal_website"
                          >
                            Personal Website
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="www.mywebsite.com"
                            id="input-personal_website"
                            placeholder="Personal Website"
                            type="text"
                            name="pesonal_website"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-github"
                          >
                            Github
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="https://github.com/mygithub"
                            id="input-github"
                            placeholder="Github account"
                            type="text"
                            name="github"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-linkedin"
                          >
                            LinkedIn
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="www.linkedin.com/youraccount"
                            id="input-linkedin"
                            placeholder="LinkedIn account"
                            type="text"
                            name="likedin"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-xing"
                          >
                            Xing
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="www.xing.de/youraccount"
                            id="input-xing"
                            placeholder="Xing accodunt"
                            type="text"
                            name="xing"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(EditProfileForm);
