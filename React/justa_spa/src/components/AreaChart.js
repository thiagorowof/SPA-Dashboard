import React from "react";
import { connect } from "react-redux";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mapStateToProps = state => {
    return { charts: state.charts };
  };

const AreaCharts = ({ charts }) => (
    <ResponsiveContainer className="ResponsiveContainer" width="90%" height={300}>
        <AreaChart data={charts}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <CartesianGrid strokeDasharray="10 0" vertical={false}/>
            <XAxis dataKey="date"/>
            <YAxis />
            <Tooltip/>
            <Area type='monotone' dot={{ fill: '#227096', strokeWidth: 0.1 }} dataKey='rs' stroke='#227096' fill='#d9eff7' />
        </AreaChart>
    </ResponsiveContainer>
)
   
const AreaChartsExport = connect(mapStateToProps)(AreaCharts);
  export default AreaChartsExport;