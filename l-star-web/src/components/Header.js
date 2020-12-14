import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Beregner from "./Beregner"

class Header extends Component {
    render() {
      return (
        <div className="ui container" style={{ marginTop: "10px"}}>
          <div class="ui inverted menu">
  <a class="active item">
  <Link to="/">Home</Link>
  </a>
  <a class="item">
  <Link to="/Races">Forklaring</Link>
  </a>
  <a class="item">
  <Link to="/Standings">Om L-Star</Link>
  </a>
  <div class="right menu">
    <div class="item">
      <div class="ui icon input">
        <input type="text" placeholder="Search..."/>
        <i class="search link icon"></i>
      </div>
    </div>
    <a class="ui item">
      Logout
    </a>
  </div>
</div>
<Route exact path="/" component={Beregner} />
          {/*<Route path="/Races" component={} />
          <Route path="/Results" component={} /> */}
                  
        </div>
      );
    }
  }
  
  
  
     
  export default Header;