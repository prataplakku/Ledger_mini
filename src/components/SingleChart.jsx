import React from 'react'
import { PieChart, Pie, Cell } from "recharts";
import '../styles/singleChart.css'

const SingleChart = ({name, percentage, color}) => {
    const data = [
        { name:"Name", value: percentage },
        { name:"Emplty" , value: 100 - percentage }
    ];
    const COLORS = [color, 'FF6B6B']

  return (
        <div className="chart-wrapper">
        <PieChart className='piechart' width={70} height={70}>
            
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={30}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
                {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
        </PieChart>
        <div className="chart-details">
            <h6>{percentage}%</h6>
            <span>{name}</span>
        </div>
        </div>

  )
}

export default SingleChart