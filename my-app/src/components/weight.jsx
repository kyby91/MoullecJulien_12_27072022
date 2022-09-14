import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
/**
 * Daily activity
 * @param {array} data props.data
 * @returns the BarCharts
 */

export default function Weight({data}) {
  //set the Xaxis graduation name
  data = data.map( (item , index) => {
    item.name = index +1
    
    return item
  })

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
            style={{
              padding: '3px 5px',
              borderRadius: '2px',
              background: 'red',
              margin: 'auto',
              color: '#FFF',
            }}
          >
            <p>{`${payload[0].value} kg`}</p>
            <p>{`${payload[1].value} kCal`} </p>
          </div>
      );
    }
  
    return null;
  };


  return(
    <div className='weight'>
      <div className='weight-legend'>
        <h3>Activité quotidienne</h3>
        <div className='weight-legend-key'>
          <i className="fas fa-solid fa-circle-small"></i><p>Poids (kg)</p>
          <p>Calories brûlées (kCal)</p>
        </div>
      </div>
      <ResponsiveContainer width='95%' height={200}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey="name" tickLine={false} tick={true}/>
            <YAxis tickLine={false} axisLine={false}   orientation={'right'} tick={true}/>
            <Tooltip  content={<CustomTooltip />}/>
            <Bar name='Poids (kg)' dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} barSize={10}/>
            <Bar name='Calories brûlées (kCal)' dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} barSize={10}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
  )
}
