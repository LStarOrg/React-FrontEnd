import React, { Component } from "react";
import Header from "./Header";
import OpslagsAPI from "../api/OpslagAPI";
import Footer from "./Footer"


class App extends Component {
  render() {
    /*OpslagsAPI();*/
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
