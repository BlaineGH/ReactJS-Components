import React, { Component } from "react";
import "./css/stickysection.css";
import ShoppingCart from "../ShoppingCart/shoppingcart";
import SideBar from "../SideBar/sidebar";
import NavBar from "../NavBar/navbar";

class StickySectionScrolling extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="stickycontainer">
          <div class="section" id="img1" />
          <div class="section" id="img2" />
          <div class="section" id="img3" />
          <div class="section" id="img4" />
        </div>
      </React.Fragment>
    );
  }
}

export default StickySectionScrolling;
