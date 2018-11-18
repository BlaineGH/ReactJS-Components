import React, { Component } from "react";
import "./css/navbar.css";

class TopNavBar extends Component {
  render() {
    return (
      <div class="topnavcontainer">
        <ul class="topnavlinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopNavBar;
