import React from "react";
import ReactDOM from "react-dom/client";
import { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritecolor: "red",
    };
  }
  static getDerivedStateFromProps(props, state) {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }

  changeColor = () => {
    this.setState({ favoritecolor: "blue" });
  };

  render() {
    return (
      <div>
        <h1 id="mydiv">My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default Header;
