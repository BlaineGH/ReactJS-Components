import React, { Component } from "react";
import "./css/smoothscrolling.css";

class SmoothScrolling extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <a href="#sect1">Section 1</a>
          </li>
          <li>
            <a href="#sect2">Section 2</a>
          </li>
          <li>
            <a href="#sect3">Section 3</a>
          </li>
          <li>
            <a href="#sect4">Section 4</a>
          </li>
          <li>
            <a href="#sect5">Section 5</a>
          </li>
          <li>
            <a href="#sect6">Section 6</a>
          </li>
        </ul>
        <section id="sect1" data-text="Section 1" />
        <section id="sect2" data-text="Section 2" />
        <section id="sect3" data-text="Section 3" />
        <section id="sect4" data-text="Section 4" />
        <section id="sect5" data-text="Section 5" />
        <section id="sect6" data-text="Section 6" />
      </React.Fragment>
    );
  }
}

export default SmoothScrolling;
