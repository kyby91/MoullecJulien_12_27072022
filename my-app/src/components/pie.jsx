import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

/**
 * User day score
 * @param {number} data props.data
 * @returns Pie grraphic
 */

//this component is the graphic pie
export default function pie({data}) {

    //data for the invisble pie
    const data2 = [
    { name: 'Group A', value: 100 },
    ];

    let dataObject = []

    //we set the value of item for dataObject
    let newData = () =>{
        //the total of the pie is 100
        dataObject.push({'name': 'Group A', value: data*100})//our value
        dataObject.push({'name': 'Group B', value: (100-data*100)})//the opposite value
    }
    newData()
    const COLORS = ['#FF0000', '#FBFBFB'];

    const renderLegend = () => {
        return (
          <div>
            <div className="pie-Legend">
              <span>{data * 100}%</span>
              <p>de votre objectif</p>
            </div>
          </div>
        )
    }
    
    const style = {
        top: '35%',
        left: '36%'
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
                    <Legend 
                    content={renderLegend}
                    layout="horizontal"
                    verticalAlign="middle"
                    wrapperStyle={style}
                    />
                    <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="progress-label"
                        style={{
                        padding: '20px',
                        transform: 'translate(15%, 10%)',
                        color: '#000',
                        fontWeight: '500',
                        }}
                    >
                        Score
                    </text>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
