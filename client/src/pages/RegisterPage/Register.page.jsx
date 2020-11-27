import React from "react";
import '../../assets/scss/LoginPage.styles.scss'

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row,
  UncontrolledAlert,
} from "reactstrap";

// ### REDUX ###
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";

class Register extends React.Component {
  // our state
  state = {
    first_name: "",
    last_name: "",
    class_name: "",
    graduate_id: "",
    email: "",
    password: "",
    password2: "",
    msg: null,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // destructuring inputs of our register form
    const {
      first_name,
      last_name,
      class_name,
      graduate_id,
      email,
      password,
      password2,
    } = this.state;
    // Create a user object
    const newUser = {
      first_name,
      last_name,
      class_name,
      graduate_id,
      email,
      password,
      password2,
    };

    // attempt to register if the password match
    if (password === password2) {
      this.props.register(newUser);
    }
  };

  render() {
    return (
      <>
        <div className="area"></div>
        <div className="mainDiv container-fluid mx-auto col-12" >
          <Col lg="6" md="8" style={{ marginTop: "10vh" }} className="mx-auto">
            <Card className="bg-secondary shadow border-0">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center mb-4">
                  <h1 className="text-primary">Register</h1>
                </div>
                {this.state.msg ? (
                  <UncontrolledAlert color="warning" fade={false}>
                    <span className="alert-inner--icon">
                      <i className="ni ni-like-2" />
                    </span>{" "}
                    <span className="alert-inner--text">{this.state.msg}</span>
                  </UncontrolledAlert>
                ) : null}

                <Form role="form" onSubmit={this.handleSubmit}>
                  {/* Firstname and Lastname */}
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="input-first_name"
                          placeholder="First name"
                          type="text"
                          name="first_name"
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="input-last_name"
                          placeholder="Last name"
                          type="text"
                          name="last_name"
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  {/* Classname and ID Graduate */}
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="input-class_name"
                          placeholder="Class name"
                          type="text"
                          name="class_name"
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          id="input-graduate_id"
                          placeholder="Graduate ID "
                          type="text"
                          name="graduate_id"
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  {/* Email */}
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="email"
                        id="email"
                        placeholder="Email"
                        type="email"
                        autoComplete="new-email"
                        onChange={this.handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  {/* Password */}
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="password"
                        id="password"
                        placeholder="Password"
                        type="password"
                        autoComplete="new-password"
                        onChange={this.handleChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  {/* Confirm Password */}
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="password2"
                        id="password2"
                        placeholder="Confirm Password "
                        type="password"
                        autoComplete="new-password"
                        onChange={this.handleChange}
                      />
                    </InputGroup>
                  </FormGroup>

                  {/* <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row> */}
                  <div className="text-center">
                    <Button className="mt-4" color="primary" type="submit">
                      Create account
                  </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </div>
      </>
    );
  }
  // define your PropTypes
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(Register);
