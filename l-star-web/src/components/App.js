import React, { Component } from "react";
import Header from "./Header";
<<<<<<< HEAD
import firebase from "../api/firebase";
import OpslagsAPI from "../api/OpslagAPI";
import Footer from "./Footer"
>>>>>>> 19eac9a8a3530d158576a82e014e959a2c7ab809

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
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
