import React, { Component } from "react";
import "./css/sidebar.css";

class SideBar extends Component {
  render() {
    return (
      <div class="sidebar">
        <ul class="sidebarlinks">
          <li>
            <a href="#" data-text="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#" data-text="Portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" data-text="About">
              About
            </a>
          </li>
          <li>
            <a href="#" data-text="Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
