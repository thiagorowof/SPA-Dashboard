import React, { Component } from "react";
import AreaCharts from "./components/AreaChart";
import List from "./components/List";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div class="headerClient">Volume de vendas aprovadas</div>
        <AreaCharts/>
        <List />
      </div>
    );
  }
}
 
export default Dashboard;