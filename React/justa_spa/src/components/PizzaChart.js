import React from "react";
import { connect } from "react-redux";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const data = [{nameValue: 'Pendente', value: 41}, {nameValue: 'Ativo', value: 58}];
const colors = ['#FFBB28','#0088FE'];

const mapStateToProps = state => {
    return { charts: state.charts };
  };


const renderLegend = (props) => {
  const { payload } = props;
  return (
    <Row>
      {
        payload.map((entry, index) => (
          <Col className="pizzaCol" sm={{ span: 3, offset: 2 }} key={`item-${index}`} style={{ backgroundImage: "linear-gradient(#f7f7f7, #ffffff)", textAlign: "center" ,borderStyle: "solid", borderBottom: "none", borderLeft: "none", borderRight: "none", borderTopColor: entry.color}}>
            <p style={{marginBottom:"0",fontSize:"11px"}}>{entry.payload.nameValue}</p>   
            <p style={{fontWeight:"bold"}}>{(entry.payload.value).toFixed(2)}%</p>
          </Col>
        ))
      }
    </Row>
  );
}

const PieCharts = ({ charts }) => (
    <ResponsiveContainer className="ResponsiveContainer" width="100%" height={300}>
        <PieChart>
        <Pie data={data} dataKey="value" labelLine={false} outerRadius={100} fill="#8884d8">
        	{
          	data.map((entry, index) => <Cell key={index} fill={colors[index % colors.length]}/>)
          }
        </Pie>
        <Legend content={renderLegend} />
      </PieChart>
    </ResponsiveContainer>
)
   
const PieChartsExport = connect(mapStateToProps)(PieCharts);
export default PieChartsExport;

