import React from "react";
import "../../assets/scss/LoginPage.styles.scss";
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
  Row,
  Col,
  UncontrolledAlert,
} from "reactstrap";

// ### REDUX ###
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
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
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    // Attempt to login
    this.props.login(user);
  };

  render() {
    return (
      <>
        <div className="area"></div>
        <div className="mainDiv container-fluid mx-auto col-12">
          <Col lg="5" md="7" className="mx-auto" style={{ marginTop: "10vh" }}>
            <Card className="bg-secondary shadow border-0">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center mb-4">
                  <h1 className="text-primary">Login</h1>
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
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-envelope" />
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
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-unlock" />
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
                  <div className="text-center">
                    <Button className="my-4" color="primary" type="submit">
                      Login
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Row className="mt-3">
              <Col xs="6">
                <a
                  className="text-light"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <small>Forgot password?</small>
                </a>
              </Col>
              <Col className="text-right" xs="6">
                <Link className="default" to="/auth/register">
                  <small>Create new account</small>
                </Link>
              </Col>
            </Row>
          </Col>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
