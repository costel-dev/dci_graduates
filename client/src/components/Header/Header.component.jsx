import React from "react";
import "./header.scss";
// reactstrap components
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
// custom components

class Header extends React.Component {
  render() {
    return (
      <>
        <div>
          <div className="header-body ml-5">
            {/* Card stats */}
            <div className="justify-content-center mt-8 pt-8">
              <Row>
                <Col xl="6" lg="5" md="5" sm="5" xs="5">
                  <h1 className="heroFont fontShadow">DCI Graduates</h1>
                  <p>
                    <small className="smallFont fontShadow">
                      Discover, Contact and Interview a Graduate
                    </small>
                  </p>
                  <h3 className="paraFont fontShadow">
                    Matching our Graduates of Web development and
                    Online-Marketing with job and internship opportunities in
                    Germany
                  </h3>
                  <br></br>
                  <div>
                    <Button
                      tag={Link}
                      to="/graduates"
                      className="bg-success p-1 text-lg p-2 "
                    >
                      DCI our Graduates
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
