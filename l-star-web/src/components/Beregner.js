import React from "react";
import DataTable from "./DataTable";

class Beregner extends React.Component {
  render() {
    return <div className="ui container">
        <h2>Listeria Beregner</h2>
        <div className="ui green segment">
          <h3>Ingredienser</h3>
          <p>Tilføj ingredienser fra din opskrift til listen nedenunder og mængden af ingrediensen.</p>
          <DataTable />
        </div>
        <div className="ui green segment">
          
        </div>

    </div>;
  }
}

export default Beregner;
