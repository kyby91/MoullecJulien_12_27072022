import React from 'react';
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';




//this constant custom the tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        padding: '3px 5px',
        borderRadius: '2px',
        background: '#FFF',
        margin: 'auto',
      }}>
        <p className="label">{`${payload[0].value}min`}</p>
        <p className="desc"></p>
      </div>
    );
  }

  return null;
};

//this component is the graphic line
export default function line({data}) {

  const formatXAxis = (elm) => {
    const weekday = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return `${weekday[elm - 1]}`
  }
  //here we custom the legend
  const renderLegend = () => {
    return (
      <div
        style={{
          color: '#FFF',
          padding: '0 5%',
          opacity: '0.5',
        }}
      >
        <p style={{ fontSize: '.9rem', fontWeight: 'bolder' }}>
          Durée moyenne des sessions
        </p>
      </div>
    )
  }

  return (
    <div className='Line'>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart width={300} height={100} data={data}
        onMouseMove={(e) => {
          if (e.isTooltipActive === true) {
            let div = document.querySelector('.Line')
            let windowWidth = div.clientWidth
            let mouseXpercentage = Math.round(
              (e.activeCoordinate.x / windowWidth) * 100
            )
            div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
          }
        }}
        >
          <Line dot={false} type="natural" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} />
          
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            height={30}
            tick={{ fill: '#FFF', opacity: 0.5 }}
            tickSize={12}
            padding={{ left: 10, right: 10 }}
            tickFormatter={formatXAxis}
            allowDataOverflow={false}
          />
          <Tooltip content={<CustomTooltip />}/>
          <Legend verticalAlign="top" align="left" content={renderLegend} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
  
}
