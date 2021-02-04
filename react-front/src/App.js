import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12  p-0">
          <NavBar />
          <Card/>
        </div>
      </div>
    );
  }
}

export default App;
