const React = require("react");
const { Component } = React;

class WordRely extends Component {
  state = {
    text: "Hello",
  };

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

module.exports = WordRely;
