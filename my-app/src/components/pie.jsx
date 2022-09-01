import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const data2 = [
  { name: 'Group A', value: 100 },
];

export default function pie({data}) {


    let dataObject = []
    let newData = () =>{
        dataObject.push({'name': 'Group A', value: data*100})
        dataObject.push({'name': 'Group B', value: (100-data*100)})
    }
    newData()
    console.log(dataObject);
    const COLORS = ['#FF0000', '#FBFBFB'];

    const renderLegend = () => {
        return (
          <div>
            <div className="radialBarLegend">
              <span>{data * 100}%</span>
              <p>de votre objectif</p>
            </div>
          </div>
        )
    }

    const style = {
        top: '50%',
        left: '50%'
    }

    return (
        <div className='pie'>
            <ResponsiveContainer width='95%' height={263}>
                <PieChart width={500} height={300} >
                    <Pie
                    data={dataObject}
                    innerRadius={95}
                    outerRadius={110}
                    fill="#FF0000"
                    paddingAngle={0}
                    dataKey="value"
                    cornerRadius={10}
                    >
                    {dataObject.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                    <Pie
                    data={data2}
                    outerRadius={95}
                    fill="#FFFFFF"
                    dataKey="value"
                    >
                    </Pie>
                  
                </PieChart>
            </ResponsiveContainer>
        </div>
        // <div className='pie'>
        //     <PieChart width='100%' height={400} >
        //         <Pie
        //         data={data}
        //         cx={120}
        //         cy={200}
        //         innerRadius={60}
        //         outerRadius={80}
        //         fill="#8884d8"
        //         paddingAngle={5}
        //         dataKey="value"
        //         >
        //         {data.map((entry, index) => (
        //             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        //         ))}
        //         </Pie>
        //     </PieChart>
        // </div>
    );
}