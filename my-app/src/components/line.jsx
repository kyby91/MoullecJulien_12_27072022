import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div >
        <p className="label">{`${payload[0].value}min`}</p>
        <p className="desc"></p>
      </div>
    );
  }

  return null;
};

const ok={
  color: "white"
}


export default function line(props) {
  
    return (
      <div className='Line'>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart width={300} height={100} data={props.data}>
            <Line dot={false} type="monotone" dataKey="pv" stroke="#FFFFFF" strokeWidth={2} />
            <XAxis tickLine={false} axisLine={false}/>
            <Tooltip content={<CustomTooltip />}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  
}
