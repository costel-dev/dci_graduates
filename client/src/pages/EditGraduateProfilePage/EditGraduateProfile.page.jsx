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
  Label,
  CustomInput,
  CardFooter,
} from "reactstrap";

// ### REDUX ###
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { update } from "../../redux/actions/authActions";
import { Link, Redirect, withRouter } from "react-router-dom";

class EditProfileForm extends React.Component {
  // our state
  state = {
    first_name: "",
    last_name: "",
    class_name: "",
    image: "",
    image_name: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    about_me: "",
    field_interest: "",
    tech_skills: "",
    seeking: "",
    personal_website: "",
    github: "",
    linkedin: "",
    xing: "",
    msg: null,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFileInputChange = ({ target: { files } }) => {
    this.setState({
      image: files[0],
      image_name: files[0].name,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // caching user.id into a variable and send it to redux
    const userID = this.props.auth.user.id;
    // destructuring inputs from our form
    const {
      first_name,
      last_name,
      class_name,
      address,
      city,
      country,
      zip,
      about_me,
      quote,
      field_interest,
      tech_skills,
      seeking,
      personal_website,
      github,
      linkedin,
      xing,
      image,
      image_name,
    } = this.state;

    // Create a user to send in redux store
    const userDataRedux = {
      first_name,
      last_name,
      class_name,
      image,
      image_name,
      address,
      city,
      country,
      zip,
      about_me,
      quote,
      field_interest,
      tech_skills,
      seeking,
      personal_website,
      github,
      linkedin,
      xing,
      userID,
    };
    console.log(userDataRedux);
    this.props.update(userDataRedux);
    this.props.history.push("/graduate/profile");
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <>
        {isAuthenticated ? (
          <>
            <Form role="form" onSubmit={this.handleSubmit}>
              <Row className="justify-content-center mt-8">
                <Col className="order-xl-1" xl="8">
                  <Card className="bg-secondary shadow">
                    <CardHeader className="bg-white border-0">
                      <Row className="align-items-center">
                        <Col xs="8">
                          <h3 className="mb-0">My account</h3>
                        </Col>
                        <Col className="text-right" xs="4">
                          <Button
                            color="secondary"
                            size="sm"
                            tag={Link}
                            to="/graduate/profile"
                          >
                            Cancel
                          </Button>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <h6 className="heading-small text-muted mb-4">
                        User information
                      </h6>
                      <Row>
                        <Col lg="6">
                          <div className="pl-lg-4">
                            <Row>
                              <Col lg="12">
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
                                    onChange={this.handleChange}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
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
                                    onChange={this.handleChange}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
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
                                    onChange={this.handleChange}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <Label for="uploadPicture">Upload Picture</Label>
                            <CustomInput
                              className="form-control-alternative"
                              type="file"
                              id="uploadPicture"
                              name="image"
                              onChange={this.handleFileInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                type="text"
                                name="zip"
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <hr className="my-4" />

                      {/* Description */}
                      <h6 className="heading-small text-muted mb-4">
                        About me
                      </h6>
                      <div className="pl-lg-4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-about_me"
                          >
                            About Me
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="A few words about you ..."
                            id="input-about_me"
                            rows="4"
                            defaultValue={user.about_me}
                            type="textarea"
                            name="about_me"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </div>
                      <div className="pl-lg-4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-quote"
                          >
                            Quote
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="inspiring message..."
                            i="input-qoute"
                            rows="4"
                            defaultValue={user.quote}
                            type="textarea"
                            name="quote"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </div>
                      <hr className="my-4" />

                      {/* Skills */}
                      <h6 className="heading-small text-muted mb-4">
                        Skill tree
                      </h6>
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
                                onChange={this.handleChange}
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
                                defaultValue={user.tech_skills}
                                id="input-tech_skills"
                                placeholder="Your Tech Skills"
                                type="text"
                                name="tech_skills"
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                defaultValue={user.personal_website}
                                id="input-personal_website"
                                placeholder="Personal Website"
                                type="text"
                                name="personal_website"
                                onChange={this.handleChange}
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
                                defaultValue={user.github}
                                id="input-github"
                                placeholder="Github account"
                                type="text"
                                name="github"
                                onChange={this.handleChange}
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
                                defaultValue={user.linkedin}
                                id="input-linkedin"
                                placeholder="LinkedIn account"
                                type="text"
                                name="linkedin"
                                onChange={this.handleChange}
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
                                defaultValue={user.xing}
                                id="input-xing"
                                placeholder="Xing accodunt"
                                type="text"
                                name="xing"
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </CardBody>
                    <CardFooter className="bg-white border-0">
                      <Row className="align-items-center">
                        <Col xs="6">
                          <Button color="primary" size="lg" type="submit">
                            Save Profile
                          </Button>
                        </Col>
                      </Row>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Form>
          </>
        ) : (
          <Redirect to="/auth/login" />
        )}
      </>
    );
  }
  // define your PropTypes
  static propTypes = {
    auth: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
  };
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default withRouter(
  connect(mapStateToProps, { update })(EditProfileForm)
);
