import React, { Component } from "react";
import Switch from "react-switch";
import './hireSwitch.styles.scss';

export default class HireSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="hireSwitch">
        <label>
          <span>Are you searching for a Job ?</span>
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            className="react-switch"
          />
		  
        </label>
		<div className="bg-info text-dark">
        <p>The Graduate is <span style={{fontWeight: "bold"}}>{this.state.checked ? 'HIREABLE !!' : 'NOT HIREABLE !!'}</span>.</p>
		</div>
      </div>
    );
  }
}
