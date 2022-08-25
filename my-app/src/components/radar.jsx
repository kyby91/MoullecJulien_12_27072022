import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Label } from 'recharts';

const data2 = [
    {
      subject: 'Math',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Chinese',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'English',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Geography',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Physics',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      fullMark: 150,
    },
];

export default function radar({data}) {
  console.log(data)

  let dataObject = data.data.map((item , index) => {
    console.log(index)
    item.kind = data.kind[index+1]
    return item
  })

  console.log(dataObject)

  return(
    <div className='radar'>
      <ResponsiveContainer width='100%' height={263}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataObject}>
            <PolarGrid stroke='#FFFFFF'/>
            <PolarAngleAxis dataKey="kind" />
            <Radar name="Mike" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
          </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
