import React, { Component } from "react";
import AreaCharts from "./components/AreaChart";
import PizzaCharts from "./components/PizzaChart";
import List from "./components/List";


var flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  // margin: '5% auto 5% auto',
};

class Clientes extends Component {
  render() {
    return (
      <div> 
        <div className="headersClient" style={flexContainer}>
          <div className="headerClient">Volume de transações</div>
          <div className="headerClient">Base de clientes</div>
        </div>
        <div style={flexContainer}>
          <AreaCharts/>
          <PizzaCharts/>
        </div>
        <div>
            <List />
        </div>
      </div>
    );
  }
}


 
export default Clientes;