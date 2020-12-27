import React, { Component } from "react";
import Header from "./Header";
import firebase from "../api/firebase";
import OpslagsAPI from "../api/OpslagAPI";

class App extends Component {
  render() {
    OpslagsAPI();
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <div className="Test">
            <h1>test</h1>
           
          </div>
        </header>
      </div>
    );
  }
}

export default App;
