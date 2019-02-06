import React from "react";
import { connect } from "react-redux";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const data = [{nameValue: 'Pendente', value: 41}, {nameValue: 'Ativo', value: 58}];
const COLORS = ['#FFBB28','#0088FE'];

// const RADIAN = Math.PI / 180;                    
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	// const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x  = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
//     	{`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

const mapStateToProps = state => {
    return { charts: state.charts };
  };


const renderLegend = (props) => {
  const { payload } = props;
  return (
    <Row>
      {
        payload.map((entry, index) => (
          <Col sm={{ span: 3, offset: 2 }} key={`item-${index}`} style={{ backgroundImage: "linear-gradient(#f7f7f7, #ffffff)", borderStyle: "solid", borderBottom: "none", borderLeft: "none", borderRight: "none", borderTopColor: entry.color}}>
          {entry.payload.nameValue}  <br/>  {(entry.payload.value).toFixed(2)}%</Col>
        ))
      }
    </Row>
  );
}

const PieCharts = ({ charts }) => (
    <ResponsiveContainer className="ResponsiveContainer" width="90%" height={300}>
        <PieChart>
        <Pie
          data={data}  
          dataKey="value"
          labelLine={false}
        //   label={renderCustomizedLabel}
          outerRadius={100} 
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Legend content={renderLegend} />
      </PieChart>
    </ResponsiveContainer>
)
   
const PieChartsExport = connect(mapStateToProps)(PieCharts);
export default PieChartsExport;

