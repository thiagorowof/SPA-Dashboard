import React, { Component } from "react";
import AreaCharts from "../areaChart";
import PizzaCharts from "../pizzaChart";
import List from "../list";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Clientes extends Component {
  render() {
    return (
      <Container>
          <Row>
            <Col style={{ backgroundColor: "white"}}>
              <div className="headerClient">Volume de transações</div>
              <AreaCharts/>
            </Col>
            <Col style={{ backgroundColor: "white"}}>
              <div className="headerClient">Base de clientes</div>
              <PizzaCharts/>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="headerClient">Detalhe dos clientes</div>
              <List />
            </Col>
          </Row>
      </Container>
    );
  }
}


 
export default Clientes;