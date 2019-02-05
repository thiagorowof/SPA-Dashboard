import React from "react";
import { connect } from "react-redux";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const data = [{nameValue: 'Group A', value: 500}, {nameValue: 'Group B', value: 300}];
const COLORS = ['#0088FE', '#FFBB28'];

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
      </PieChart>
    </ResponsiveContainer>
)
   
const PieChartsExport = connect(mapStateToProps)(PieCharts);
export default PieChartsExport;