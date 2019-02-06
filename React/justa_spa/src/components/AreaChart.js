import React from "react";
import { connect } from "react-redux";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mapStateToProps = state => {
    if(state.api.charts === undefined){
        console.log("Carregando dados do gráfico")
        return {};
        //TODO: Adicionar um loading a lista da tabela!
    } else{
        // console.dir(state.api.charts.data);
      return { charts: state.api.charts.data};
    }
};

const toMoney = (decimal, fixed = 1) => {
	return `R$ ${(decimal).toFixed(fixed)}`;
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
        <AreaChart data={charts} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <CartesianGrid strokeDasharray="10 0" vertical={false}/>
            <XAxis dataKey="attributes.date"/>
            <YAxis tickFormatter={toMoney}/>
            <Tooltip content={CustomTooltip}/>
            <Area type='monotone' dot={{ fill: '#227096', strokeWidth: 0.1 }} dataKey='attributes.rs' stroke='#227096' fill='#d9eff7' />
        </AreaChart>
    </ResponsiveContainer>
)
   
const AreaChartsExport = connect(mapStateToProps)(AreaCharts);
  export default AreaChartsExport;