import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Beregner from "./Beregner";
import Forklaring from "./Forklaring";
import Om from "./Om";

import LStarLogo from "../assets/favicon-32x32.png"

class Header extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui inverted borderless main menu fixed">
          <div className="header item">
            <img className="ui avatar image" src={LStarLogo} alt=""></img>
            L-Star Web Project
          </div>
          <a className="item">
            <Link to="/">Startside</Link>
          </a>
          <a className="item">
            <Link to="/Forklaring">Forklaring</Link>
          </a>
          <a className="item">
            <Link to="/Om">Om L-Star</Link>
          </a>
          <div className="right menu"></div>
        </div>
        <div className="ui raised segment" style={{ marginTop: 50 }}>
          <Route exact path="/" component={Beregner} />
          <Route path="/Forklaring" component={Forklaring} />
          <Route path="/Om" component={Om} />
        </div>        
      </div>
    );
  }
}


export default Header;
