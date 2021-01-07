import React from "react";

const Resultat = (props) => {
  return (
    <div>
      <h3>Resultater</h3>
      <div className="ui grid">
      <div className="two column row">
        <div className="left floated column">
          <label>Maksimal holbarhedstid på modtagersted:</label>
        </div>
        <div className="right floated right aligned column">
          <p>{props.resultatTid}</p>
        </div>
      </div>
      <div className="two column row">
        <div className="left floated column">
          <label>Holdbarhedsdato og klokkeslæt:</label>
        </div>
        <div className="right floated right aligned column">
          <p>{props.resultatDato}</p>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Resultat;
