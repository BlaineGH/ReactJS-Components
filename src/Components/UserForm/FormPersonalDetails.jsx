import React, { Component } from "react";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
                placeholder="Occupation"
                onChange={this.props.handleChange("occupation")}
                required=""
              />
            </div>
            <div class="loginforminput">
              <input
                type="text"
                placeholder="City"
                onChange={this.props.handleChange("city")}
                required=""
              />
            </div>
            <div class="loginforminput">
              <input
                type="textarea"
                placeholder="Bio"
                onChange={this.props.handleChange("bio")}
                required=""
              />
            </div>
            <div class="loginformsubmit">
              <button onClick={this.continue}>Continue</button>
              <button onClick={this.back}>Back</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FormPersonalDetails;
