import React, { Component } from "react";
import fetchJsonp from "fetch-jsonp";
import "./App.css";

const URL = "https://api.forismatic.com/api/1.0/";
const METHOD = "?method=getQuote";
const FORMAT = "&format=jsonp";
const LANG = "&lang=en&";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      author: ""
    };
    this.setData = this.setData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setData(data) {
    this.setState({
      text: data.quoteText,
      author: data.quoteAuthor
    });
  }

  handleClick() {
    fetchJsonp(`${URL}${METHOD}${FORMAT}${LANG}`, {
      jsonpCallback: "jsonp"
    })
      .then(resp => resp.json())
      .then(data => this.setData(data));
  }

  render() {
    return (
      <div className="content">
        <header className="head">
          <h1>
            <span>Quotes</span>
          </h1>
        </header>
        <div>
          <blockquote className="paper">
            <p>{this.state.text}</p>
            <footer>
              <cite>
                <strong>{this.state.author} </strong>
              </cite>
            </footer>
          </blockquote>
          <button type="button" onClick={this.handleClick}>
            Get Quote
          </button>
        </div>
      </div>
    );
  }
}

export default App;
