import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis,  ResponsiveContainer} from 'recharts';

/**
 * Graphic User performance
 * @param {*} data Information of user performance
 * @returns Radar graphic
 */

export default function radar({data}) {
  //set the first letter in Capital
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  let dataObject = data.data.map((item , index) => {
    item.kind = capitalizeFirstLetter(data.kind[index+1])
    return item
  })

  return(
    <div className='radar'>
      <ResponsiveContainer width='100%' height={263}>
          <RadarChart cx="50%" cy="50%" outerRadius="65%" data={dataObject} startAngle={390} endAngle={30} >
            <PolarGrid stroke='#FFFFFF' radialLines={false}/>
            <PolarAngleAxis dataKey="kind" stroke="#FFF" tickLine={false} />
            <Radar name="Mike" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
          </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
