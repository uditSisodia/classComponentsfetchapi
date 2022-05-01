import React, { Component } from "react";
import TableBody from "./TableBody";
import Card from "react-bootstrap/Card";
import CircularIndeterminate from "./CircularIndeterminate";
import { getData, sendData } from "./api";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRow: 10,
      loader: false,
      data: [1, 2, 3, 4, 5],
      setLoading: () => {},
      setData: () => {},
      //sendData: props.sendData,
    };
    this.mydiv = React.createRef();
  }
  static getDerivedStateFromProps(props, state) {
    return {
      data: props.data,
      loader: true,
      setLoading: props.setLoading,
      setData: props.setData,
    };
  }
  componentDidMount() {
    //props.getData();

    getData(this.state.setLoading, this.state.setData);
    console.log("value of data" + this.state.data);
    alert("component did update");
    this.setState({ loader: false });
    this.mydiv.current.focus();
    console.log("mount" + this.mydiv);
    //sendData(this.state.numberOfRow, this.state.data);
  }

  componentDidUpdate() {
    sendData(this.state.numberOfRow, this.state.data);
    //document.getElementById("mydiv").innerHTML = "The updated favorite is ";
  }
  componentWillUnmount() {
    //this.state.sendData(this.state.numberOfRow);
    //sendData(this.state.numberOfRow, this.state.data);
    alert("now table is unmount");
  }
  addElements = () => {
    this.setState({ numberOfRow: this.state.numberOfRow + 1 });
  };
  removeElements = () => {
    this.setState({ numberOfRow: this.state.numberOfRow - 1 });
  };
  clickHandler = () => {
    alert(this.mydiv.current.value);
  };
  sendData = () => {};
  render() {
    return (
      <React.Fragment>
        <table>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
          </tr>
          {!this.state.loader && <CircularIndeterminate />}
          {this.state.loader && (
            <tbody>
              {this.state.data
                .map((inVal, key) => (
                  <tr key={key}>
                    <td>{inVal.id}</td>
                    <td>{inVal.userId}</td>
                    <td>{inVal.title}</td>
                    <td>{!inVal.completed ? "false" : "true"}</td>
                  </tr>
                ))
                .filter((val, idx, array) => {
                  return idx < this.state.numberOfRow;
                })}
            </tbody>
          )}
          <tfoot>
            {this.state.numberOfRow < this.state.data.length && (
              <button onClick={this.addElements}>Add elements</button>
            )}

            {this.state.numberOfRow > 0 && (
              <button onClick={this.removeElements}>remove elements</button>
            )}
          </tfoot>
        </table>
        <div ref={this.mydiv} id="mydiv"></div>
        <button onClick={this.clickHandler}>click button</button>
      </React.Fragment>
    );
  }
}

export default Table;
