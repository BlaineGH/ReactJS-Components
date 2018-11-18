import React, { Component } from "react";
// import "./App.css";
// import SideBar from "./Components/SideBar/sidebar";
// import ShoppingCart from "./Components/ShoppingCart/shoppingcart";
// import StickySectionScrolling from "./Components/Stickysectionscrolling/stickysection";
// import NavBar from "./Components/NavBar/navbar";
// import { UserForm } from "./Components/UserForm/UserForm";
import SmoothScrolling from "./Components/SmoothScrolling/smoothscrolling";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SmoothScrolling />
      </React.Fragment>
    );
  }
}

export default App;
