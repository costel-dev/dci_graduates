import React from "react";
import Logo from '../../components/Logo/Logo'
// CSS PART
import "./LandingPage.styles.scss";
// reactstrap components
import { Button, Row } from "reactstrap";
import { Link } from "react-router-dom";

class Landingpage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="area">
          <ul className="circles">
            {/* THAT <li/> IS ONLY FOR THE GRADUATE HAT ANIMATION */}
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
          <div className="bubbleBg fade-bubble bg-default shadow"></div>
        </div>
        <div className="mainDiv container mx-auto col-12" >
          <Row className="logo-container col-xs-4 col-sm-10 col-md-8 col-lg-7 col-xl-4 mx-auto">
            <Logo />
            <div id="logo-subline" className="text-glow typewriter mx-auto justify-content-center">
              <h1 className="text-glow">Discover Contact Interview</h1>
            </div>
            <div className="mx-auto mt-3 col-4">
              <Button className="landing-button border btn-shadow btn btn-lg btn-default " tag={Link}
                to="/graduates">
                Our Graduates
            </Button>
            </div>
          </Row>

        </div>
      </div>
    );
  }
}

export default Landingpage;