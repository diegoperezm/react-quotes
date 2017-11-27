import React, { Component } from "react";
import "./App.css";

class App extends Component {
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
            <p>
              You cannot step twice into the same river, for other waters are
              continually flowing in.
            </p>
            <footer>
              <cite>Heraclitus</cite>
            </footer>
          </blockquote>
          <button type="button">Get Quote</button>
        </div>
      </div>
    );
  }
}

export default App;
