import React from "react";
import { connect } from "react-redux";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mapStateToProps = state => {
    if(state.api.charts === undefined){
        console.log("Carregando dados do gráfico")
        return {};
    } else{
      return { charts: state.api.charts.data};
    }
};

const toMoney = (decimal) => {
	return `R$${(decimal)},00`;
};

  const CustomTooltip = (props) => {
    const { payload } = props;
    if (payload && payload[0]) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].payload.attributes.date}`}</p>
                <p className="desc">{`R$ ${payload[0].payload.attributes.rs}`}</p>
            </div>
        );
    }
    return null;
  }

const AreaCharts = ({ charts }) => (
    <ResponsiveContainer className="ResponsiveContainer" width="100%" height={300}>
        <AreaChart data={charts} margin={{top: 30, right: 30, left: 50, bottom: 10}}>
            <CartesianGrid strokeDasharray="10 0" vertical={false}/>
            <XAxis dataKey="attributes.date"/>
            <YAxis allowDecimals={true} tickFormatter={toMoney}/>
            <Tooltip content={CustomTooltip}/>
            <Area type='monotone' dot={{ fill: '#227096', strokeWidth: 0.1 }} dataKey='attributes.rs' stroke='#227096' fill='#d9eff7' />
        </AreaChart>
    </ResponsiveContainer>
)
   
const AreaChartsExport = connect(mapStateToProps)(AreaCharts);
  export default AreaChartsExport;