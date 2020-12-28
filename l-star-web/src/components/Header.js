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
        <div class="ui inverted borderless main menu fixed">
          <div className="header item">
            <img className="ui avatar image" src={LStarLogo}></img>
            L-Star Web Project
          </div>

          <a class="item">
            <Link to="/">Startside</Link>
          </a>
          <a class="item">
            <Link to="/Forklaring">Forklaring</Link>
          </a>
          <a class="item">
            <Link to="/Om">Om L-Star</Link>
          </a>
          <div class="right menu"></div>
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
