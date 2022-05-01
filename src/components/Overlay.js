import React, { Component } from "react";

class Overlay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card">
        <h3>this data is rendered</h3>
        <button
          style="padding:5px;background-color:white;"
          onClick={this.props.changeOverlay(false)}
        >
          OK
        </button>
      </div>
    );
  }
}

export default Overlay;
