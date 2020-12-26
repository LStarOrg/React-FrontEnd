import React from "react";

import EmilImg from "../assets/Emil.png"
import JonImg from "../assets/Jon.jpg"

class Om extends React.Component {
  render() {
    return (
      <div classname="ui container">
        <h1 className="ui header">Om L-Star</h1>
        <div className="ui green segment">
          <h2 className="ui header">Om L-Star Web Project</h2>
          <p>L-star Web Project er udviklet af:</p>
          <div className="ui two column grid">
              <div className="column">
                  <div className="ui fluid card">
                      <div className="">
                          <img className="ui centered image" src={EmilImg} size="150"/>
                      </div>
                    <div className="content">
                        <a className="header">Emil Mosbæk Walsøe Pedersen</a>
                        <p>Datamatiker</p>
                    </div>
                  </div>
              </div>
              <div className="column">
                  <div className="ui fluid card">
                  <div className="">
                          <img className="ui centered image" src={JonImg}/>
                      </div>
                    <div className="content">
                        <a className="header">Jon Paw Lam</a>
                        <p>Penis Connaisseur</p>
                    </div>
                  </div>
              </div>
          </div>
          <p>
            Dette projekt er udviklet vores afsluttede hovedopgave på
            datamatiker studiet.
          </p>
        </div>
      </div>
    );
  }
}

export default Om;
