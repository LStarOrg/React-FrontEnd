import React from "react";

class TempList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gaspakket: "",
      dato: "",
      tid: "",
      timer: "",
      tempProd: "",
      tempMod: "",

      ingredienser: [
        { id: 1, type: "Brød", amount: "" },
        { id: 2, type: "Kartofler og pasta", amount: "" },
        { id: 3, type: "Smør, mayonnaise, flødeost mm.", amount: "" },
        { id: 4, type: "Grønne salater, spinat og krydderurter", amount: "" },
        { id: 5, type: "Løg, porre og kål", amount: "" },
        {
          id: 6,
          type: "Agurk, courgette, peberfrugt, grønne bønner",
          amount: "",
        },
        { id: 7, type: "Tomater", amount: "" },
        { id: 8, type: "Gulerod og rødbede", amount: "" },
        { id: 9, type: "Avocado", amount: "" },
        { id: 10, type: "Champignon", amount: "" },
        { id: 11, type: "Ærter, majs og asparges", amount: "" },
        { id: 12, type: "Syltede grøntsager", amount: "" },
        { id: 13, type: "Varmebehandlede grøntsager", amount: "" },
        { id: 14, type: "Citrusfrugter", amount: "" },
        { id: 15, type: "Kødpålæg, pH >6,2 og ≤2,5 % salt-i-vand", amount: "" },
        { id: 16, type: "Kødpålæg, pH >6,2 og >2,5 % salt-i-vand", amount: "" },
        {
          id: 17,
          type: "Kødpålæg, pH >5,8-6,2 og ≤2,5 % salt-i-vand",
          amount: "",
        },
        {
          id: 18,
          type: "Kødpålæg, pH >5,8-6,2 og >2,5 % salt-i-vand",
          amount: "",
        },
        {
          id: 19,
          type: "Kødpålæg, pH >5,4-5,8 og ≤2,5 % salt-i-vand",
          amount: "",
        },
        {
          id: 20,
          type: "Kødpålæg, pH >5,4-5,8 og >2,5 % salt-i-vand",
          amount: "",
        },
        { id: 21, type: "Kødpålæg, pH ≤5,4 og ≤2,0 % salt-i-vand", amount: "" },
        { id: 22, type: "Kødpålæg, pH ≤5,4 og ≤2,0 % salt-i-vand", amount: "" },
        { id: 23, type: "Kødpålæg, pH ≤5,4 og >4,0 % salt-i-vand", amount: "" },
        {
          id: 24,
          type: "Fiskepålæg, pH >6,0 og ≤1,0 % salt-i-vand",
          amount: "",
        },
        {
          id: 25,
          type: "Fiskepålæg, pH >6,0 og >1,0 % salt-i-vand",
          amount: "",
        },
        {
          id: 26,
          type: "Fiskepålæg, pH >5,5-6,0 og ≤3,0 % salt-i-vand",
          amount: "",
        },
        {
          id: 27,
          type: "Fiskepålæg, pH >5,5-6,0 og >3,0 % salt-i-vand",
          amount: "",
        },
        { id: 28, type: "Spegepølse", amount: "" },
        { id: 29, type: "Leverpostej", amount: "" },
        { id: 33, type: "Æg", amount: "" },
        { id: 30, type: "mayonnaisesalater", amount: "" },
        { id: 31, type: "Ost (faste)", amount: "" },
        { id: 32, type: "Ost (bløde)", amount: "" },
      ],
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(
      this.state.gaspakket,
      this.state.dato,
      this.state.tid,
      this.state.timer,
      this.state.tempProd,
      this.state.tempMod,
      this.state.ingredienser
    );
  };

  onChangeAmount = (id, e) => {
    this.setState({
      ingredienser: this.state.ingredienser.map((ingrediens) => {
        if (id === ingrediens.id) {
          return { ...ingrediens, amount: e.target.value };
        }
        return ingrediens;
      }),
    });
  };

  renderTableData() {
    return this.state.ingredienser.map((ingrediens) => {
      const { id, type } = ingrediens; //destructuring
      return (
        <tr key={id}>
          <td>
            <p>{type}</p>
          </td>
          <td>
            <div class="ui action input">
              <input
                type="text"
                placeholder="Mængde"
                value={this.state.ingredienser.amount}
                onChange={(e) => {
                  this.onChangeAmount(ingrediens.id, e);
                }}
              />
              <select className="ui fluid selection dropdown">
                <option selected="" value="kg">
                  KG
                </option>
                <option value="g">G</option>
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
        <form onSubmit={this.onFormSubmit}>
          <table id="itemsTable" className="ui very padded fixed table">
            <thead>
              <tr>
                <th>Fødevare</th>
                <th>Mængde</th>
              </tr>
            </thead>
            <tbody id="">{this.renderTableData()}</tbody>
          </table>
          <div className="ui vertical segment">
            <p>Er produktet gaspakket?</p>
            <select
              className="ui dropdown"
              onChange={(e) => this.setState({ gaspakket: e.target.value })}
            >
              <option value="nej">Nej</option>
              <option value="ja">Ja</option>
            </select>
          </div>
          <div className="ui vertical segment">
            <p>Produktions dato og klokkeslæt</p>
            <div className="ui input">
              <input
                type="text"
                placeholder="Dato: dd-mm-yy"
                onChange={(e) => this.setState({ dato: e.target.value })}
              />
            </div>
            <div className="ui input">
              <input
                type="text"
                placeholder="Tid: 12:03"
                onChange={(e) => this.setState({ tid: e.target.value })}
              />
            </div>
          </div>
          <div className="ui vertical segment">
            <p>Opbevaringstid på produktionssted</p>
            <div className="ui right labeled input">
              <input
                type="text"
                placeholder="Eks: 4"
                onChange={(e) => this.setState({ timer: e.target.value })}
              />
              <div className="ui basic label">Timer</div>
            </div>
          </div>
          <div class="ui vertical segment">
            <p>Opbevaringstemparatur på produktionssted</p>
            <select
              class="ui dropdown"
              onChange={(e) => this.setState({ tempProd: e.target.value })}
            >
              <option value="3">3 °C</option>
              <option value="4">4 °C</option>
              <option value="5">5 °C</option>
              <option value="6">6 °C</option>
              <option value="7">7 °C</option>
              <option value="8">8 °C</option>
            </select>
          </div>
          <div class="ui vertical segment">
            <p>Opbevaringstemparatur på modtagersted</p>
            <select
              class="ui dropdown"
              onChange={(e) => this.setState({ tempMod: e.target.value })}
            >
              <option value="3">3 °C</option>
              <option value="4">4 °C</option>
              <option value="5">5 °C</option>
              <option value="6">6 °C</option>
              <option value="7">7 °C</option>
              <option value="8">8 °C</option>
            </select>
          </div>
          <br />
          <button class="ui button" onClick={this.onFormSubmit}>
            Beregn
          </button>
        </form>
      </div>
    );
  }
}

export default TempList;
