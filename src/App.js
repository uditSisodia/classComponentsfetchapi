import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import Overlay from "./components/Overlay";
import CircularIndeterminate from "./components/CircularIndeterminate";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showOverlay, changeOverlay] = useState(false);
  const [showTable, setShowtable] = useState(false);
  /*
  async function getData() {
    setLoading(true);
    await fetch(`https://jsonplaceholder.typicode.com/todos/`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }

  async function sendData(dataLen) {
    const smallData = data.filter((data, index, array) => index < dataLen);
    await fetch(`https://jsonplaceholder.typicode.com/todos/posts/`, {
      //async () =>
      method: "POST",
      body: JSON.stringify({
        data: smallData,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }*/

  /*
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/todos/`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);*/
  const showhandler = () => {
    setShowtable(!showTable);
  };
  return (
    <React.Fragment>
      <div className="App">
        {showTable && (
          <Table
            data={data}
            setLoading={setLoading}
            setData={setData}
            changeOverlay={changeOverlay}
          />
        )}
        <button onClick={showhandler}>button to hide table</button>
      </div>
      {showOverlay && (
        <div className="overlay">
          <Overlay changeOverlay={changeOverlay} />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
