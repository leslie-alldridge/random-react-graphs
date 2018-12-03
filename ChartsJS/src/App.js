import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Line } from "react-chartjs-2";

class App extends Component {
  render() {
    const data = {
      labels: [
        "10/04/2018",
        "10/05/2018",
        "10/06/2018",
        "10/07/2018",
        "10/08/2018",
        "10/09/2018",
        "10/10/2018",
        "10/11/2018",
        "10/12/2018",
        "10/13/2018",
        "10/14/2018",
        "10/15/2018"
      ],
      datasets: [
        {
          label: "Exercise Duration",
          data: [22, 19, 27, 23, 22, 24, 17, 25, 23, 24, 20, 19],
          fill: true, // Don't fill area under the line
          borderColor: "blue" // Line color
        }
      ]
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <h1>this is a graph </h1>

        <Line data={data} />
      </div>
    );
  }
}

export default App;
