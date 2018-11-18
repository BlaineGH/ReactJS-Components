import React, { Component } from "react";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    console.log(this.props.values);
    return (
      <React.Fragment>
        <div class="loginformdiv">
          <div class="loginform">
            <div class="loginforminput">
              <input
                type="text"
                placeholder="First Name"
                onChange={this.props.handleChange("firstName")}
              />
            </div>
            <div class="loginforminput">
              <input
                type="text"
                placeholder="Last Name"
                onChange={this.props.handleChange("lastName")}
              />
            </div>
            <div class="loginforminput">
              <input
                type="text"
                placeholder="Email"
                onChange={this.props.handleChange("email")}
              />
            </div>
            <div class="loginformsubmit">
              <button onClick={this.continue}>Continue</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;
