import React from 'react';
import { PieChart, Pie, Cell } from "recharts";
import '../styles/multichart.css';

const Multichart = ({ name, data, COLORS }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    

    return (
        <div className='chart-container'>
            {/* Relative container to position elements */}
            <div className="chart">
                <div className="chart-wrapper">
                    <PieChart className='piechart' width={250} height={250}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>

                    {/* Overlaying details inside PieChart */}
                    <div className="chart-details">
                        <h2>{total}</h2>
                        <span>{name}</span>
                    </div>
                </div>
                <div className="stats">
                    <div className="status">
                        <div>
                        <div className="color-box" style={{ backgroundColor: stat.color }}></div>
                        
                        <span>Completed</span>
                        </div>
                        
                        <span>Pending</span>
                        <span>Late</span>
                    </div>
                    <div className="numbers">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="percentages">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Multichart;
