import React from "react";
import DataTable from "./DataTable";
import TempList from "./TempList";
import Resultat from "./Resultat";

class Beregner extends React.Component {
  render() {
    return <div className="ui container">
        <h2>Listeria Beregner</h2>
        <div className="ui green segment">
          <h3>Ingredienser</h3>
          <p>Tilføj ingredienser fra din opskrift til listen nedenunder og mængden af ingrediensen.</p>
          <TempList />
        </div>
        <div className="ui green segment">
          <Resultat 
          resultatTid=" timer"
          resultatDato="indsæt her"
           />
        </div>

    </div>;
  }
}

export default Beregner;
