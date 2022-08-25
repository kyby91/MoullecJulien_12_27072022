import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}kCal`}</p>
        <p className="desc"></p>
      </div>
    );
  }

  return null;
};


export default function Weight({data}) {
  // console.log(data)

  data = data.map( (item , index) => {
    item.name = index +1
    
    return item
  })

  // console.log(data)  

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
