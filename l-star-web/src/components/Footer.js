import React, { Component } from "react";
import LStarLogo from "../assets/favicon-96x96.png"


function ZEANav() {
  window.location.assign("https://www.zealand.dk/");
}

function DTUNav() {
  window.location.assign("https://www.dtu.dk/");
}

function FSNav() {
  window.location.assign("https://www.foedevarestyrelsen.dk/");
}

function EANav() {
  window.location.assign("https://www.eaviden.dk/project/l-star/");
}

class Footer extends Component {
  render() {
    return (
      <div
        class="ui inverted vertical footer segment"
        style={{ marginTop: 10 }}
      >
        <div class="ui center aligned container">
          <div class="ui stackable inverted divided grid">
            <div class="three wide column">
              <h4 class="ui inverted header">Nyttige Links</h4>
              <div class="ui inverted link list">
                <a href="#" class="item" onClick={ZEANav}>
                  Zealand
                </a>
                <a href="#" class="item" onClick={DTUNav}>
                  DTU
                </a>
                <a href="#" class="item" onClick={FSNav}>
                  Fødevare Styrelsen
                </a>
                <a href="#" class="item" onClick={EANav}>
                  Om L-star på ea-viden
                </a>
              </div>
            </div>
            <div class="seven wide column">
              <h4 class="ui inverted header">I samarbejde med:</h4>
              <img src=""></img>
            </div>
          </div>
          <div class="ui inverted section divider"></div>
          <img class="ui centered" src={LStarLogo}></img>
          <p>L-Star Web Project</p>
          <br/>
          <div class="ui horizontal inverted small divided link list">
            <a class="item" href="#">
              Site Map
            </a>
            <a class="item" href="#">
              Kontakt os
            </a>            
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
