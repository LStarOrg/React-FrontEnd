import React from "react";
import DataTable from "./DataTable";
import TempList from "./TempList";
import Resultat from "./Resultat";
import totalmængde from "../actions/beregning";
import mængdeFriskeGrøntsager from "../actions/beregning";
import allBeregn from "../actions/beregning";

class Beregner extends React.Component {
  state = { infos: [], resultatTid: "", resultatDato: "", procentFriskG: "" };

  onFullSubmit = (
    gaspakket,
    dato,
    tid,
    timer,
    tempProd,
    tempMod,
    ingredienser
  ) => {
    const procentFG = allBeregn(ingredienser);
    this.setState({ procentFriskG: procentFG });
  };

  render() {
    return (
      <div className="ui container">
        <h2>Listeria Beregner</h2>
        <div className="ui green segment">
          <h3>Ingredienser</h3>
          <p>
            Tilføj ingredienser fra din opskrift til listen nedenunder og
            mængden af ingrediensen.
          </p>
          <TempList onSubmit={this.onFullSubmit} />
        </div>
        <div className="ui green segment">
          <Resultat
            resultatProcent={this.state.procentFriskG}
            resultatTid={this.state.resultatTid}
            resultatDato={this.state.resultatDato}
          />
        </div>
      </div>
    );
  }
}

export default Beregner;
