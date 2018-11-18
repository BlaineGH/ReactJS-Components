import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <span>{this.formatCount()}</span>
        <button onClick={() => this.props.onInc(this.props.counter)}>+</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }
  // () => this.handleIncrement(product)} When you have access to products w/map method.
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
