import React, { Component } from "react";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    console.log({ firstName });
    return (
      <React.Fragment>
        <div class="loginformdiv">
          <div class="loginform">
            <div class="loginforminput">
              <ul>
                <li>
                  <label>First Name:</label>
                  <p>{firstName}</p>
                </li>
                <li>
                  <label>Last Name:</label>
                  <p>{lastName}</p>
                </li>
                <li>
                  <label>Email:</label>
                  <p>{email}</p>
                </li>
                <li>
                  <label>Occupation:</label>
                  <p>{occupation}</p>
                </li>
                <li>
                  <label>City:</label>
                  <p>{city}</p>
                </li>
                <li>
                  <label>Bio:</label>
                  <p>{bio}</p>
                </li>
              </ul>
              <div class="loginformsubmit">
                <button onClick={this.continue}>Submit</button>
                <button onClick={this.back}>Back</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Confirm;
