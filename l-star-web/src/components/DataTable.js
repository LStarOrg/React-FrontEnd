import React from "react";

function Add() {}

class DataTable extends React.Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      ingredienser: [
        { id: 1, type: "Spinat", amount: 0 },
        { id: 2, type: "Brød", amount: 19 },
        { id: 3, type: "noget", amount: 16 },
        { id: 4, type: "ka", amount: 25 },
      ],
    };
  }

  renderTableData() {
    return this.state.ingredienser.map((ingrediens, index) => {
      const { id, type, amount } = ingrediens; //destructuring
      return (
        <tr key={id}>
          <td>
            <select
              className="ui fluid multiple selection dropdown"
              multiple=""
            >
              <option value=""></option>
              <option value="1">Fløde</option>
              <option value="2">Agurk</option>
              <option value="3">Megetlangt og med mellem rum</option>
              <option value="4">hey</option>
              <option value="5">hey</option>
              <option value="6">hey</option>
              <option value="7">hey</option>
            </select>
          </td>
          <td>
            <div class="ui action input">
              <input type="text" placeholder="Mængde" value={amount} />
              <select className="ui fluid selection dropdown">
                <option selected="" value="kg">
                  Kilogram
                </option>
                <option value="g">Gram</option>
              </select>
            </div>
          </td>
        </tr>
      );
    });
  }

  renderOption;

  render() {
    //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
      <div>
        <table id="itemsTable" className="ui very padded fixed table">
          <thead>
            <tr>
              <th>Fødevare</th>
              <th>Mængde</th>
            </tr>
          </thead>
          <tbody id="">{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default DataTable;
