import React from "react";
import './style.css';

class FooterProducts extends React.Component {
  render() {
    return (
      <div className="row features">
        <div className="col-md-4">
          <div className="round-icon">
            <span className="fi-widget" />
          </div>
          <h3>Adipiscing Elit</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            viverra, lacus id interdum ultrices, elit metus semper tellus.
          </p>
        </div>
        <div className="col-md-4">
          <div className="round-icon">
            <span className="fi-graph-bar" />
          </div>
          <h3>Adipiscing Elit</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            viverra, lacus id interdum ultrices, elit metus semper tellus.
          </p>
        </div>
        <div className="col-md-4">
          <div className="round-icon">
            <span className="fi-download" />
          </div>
          <h3>Adipiscing Elit</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            viverra, lacus id interdum ultrices, elit metus semper tellus.
          </p>
        </div>
      </div>
    );
  }
}

export default FooterProducts;
