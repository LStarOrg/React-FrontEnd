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
          <div className="ui four column grid">
              <div className="column">
                  <div className="ui card">
                      <div className="">
                          <img className="ui small centered image" src={EmilImg} size="150" alt=""/>
                      </div>
                    <div className="content">
                        <a href="#" className="header">Emil Mosbæk Walsøe Pedersen</a>
                        <p>Datamatiker</p>
                        <p>Email: emilwalsoepedersen@gmail.com</p>
                    </div>
                  </div>
              </div>
              <div className="column">
                  <div className="ui card">
                  <div className="">
                          <img className="ui small centered image" src={JonImg} alt=""/>
                      </div>
                    <div className="content">
                        <a href="#" className="header">Jon Paw Lam</a>
                        <p>Datamatiker</p>
                        <p>Email: </p>
                    </div>
                  </div>
              </div>
          </div>
          <p>
            Dette projekt er udviklet til vores afsluttede hovedopgave på
            datamatiker studiet.
          </p>
        </div>
      </div>
    );
  }
}

export default Om;
