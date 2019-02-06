import React, { Component } from "react";
import AreaCharts from "../AreaChart";
import PizzaCharts from "../PizzaChart";
import List from "../List";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Clients extends Component {
  render() {
    return (
      <Container>
          <Row>
            <Col sm={8}>
              <div className="headerClient">Volume de transações</div>
              <AreaCharts/>
            </Col>
            <Col>
              <div className="headerClient">Base de clientes</div>
              <PizzaCharts/>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="headerClient marginFix">Detalhe dos clientes</div>
              <List />
            </Col>
          </Row>
      </Container>
    );
  }
}


 
export default Clients;