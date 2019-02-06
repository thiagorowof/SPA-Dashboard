import React, { Component } from "react";
import AreaCharts from "../AreaChart";
import List from "../List";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Dashboard extends Component {
  render() {
    return (
      <Container>
          <Row>
            <Col style={{ padding: "0"}}>
              <div className="headerClient" >Volume de vendas aprovadas</div>
            </Col>
          </Row>
          <Row>
            <AreaCharts/>
          </Row>
          <Row>
            <Col style={{ padding: "0"}}>
              <div className="headerClient marginFix">Detalhe das vendas</div>
              <List />
            </Col>
          </Row>
      </Container>
    );
  }
}
 
export default Dashboard;