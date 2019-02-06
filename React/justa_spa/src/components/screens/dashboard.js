import React, { Component } from "react";
import AreaCharts from "../areaChart";
import List from "../list";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Dashboard extends Component {
  render() {
    return (
      <Container>
          <Row>
            <Col>
              <div className="headerClient">Volume de vendas aprovadas</div>
            </Col>
          </Row>
          <Row>
            <AreaCharts/>
          </Row>
          <Row>
            <Col>
              <div className="headerClient">Detalhe das vendas</div>
              <List />
            </Col>
          </Row>
      </Container>
    );
  }
}
 
export default Dashboard;