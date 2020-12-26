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
  <Link to="/Forklaring">Forklaring</Link>
  </a>
  <a class="item">
  <Link to="/Om">Om L-Star</Link>
  </a>
  <div class="right menu"> 
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