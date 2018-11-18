import React, { Component } from "react";
import NavBar from "./navbar";
import Counters from "./counters";

class ShoppingCart extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 1 },
      { id: 3, value: 1 },
      { id: 4, value: 1 }
    ]
  };
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDelete(counterId) {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }

  handleReset() {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  handleIncrement(counter) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }

  render() {
    let allItems = 0;
    for (let i = 0; i < this.state.counters.length; i++) {
      allItems += this.state.counters[i].value;
    }
    return (
      <React.Fragment>
        <NavBar totalCounters={allItems} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onInc={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
