import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:
        "You cannot step twice into the same river, for other waters are continually flowing in.",
      author: "Heraclitus"
    };
  }
  render() {
    return (
      <div>
        <header>
          <h1>
            <span>Quotes</span>
          </h1>
        </header>
        <div>
          <blockquote>
            <p>{this.state.text}</p>
            <footer>
              <cite>{this.state.author}</cite>
            </footer>
          </blockquote>
          <button type="button">Get Quote</button>
        </div>
      </div>
    );
  }
}

export default App;
