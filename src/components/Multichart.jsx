import React from 'react';
import { PieChart, Pie, Cell } from "recharts";
import '../styles/multichart.css';

const Multichart = ({ name, data, COLORS }) => {
    const Completed = data[0]['value']
    const Pending = data[1]['value']
    const Late = data[2]['value']
    const total = Completed + Pending + Late

    const completedPercentage = ((Completed / total) * 100).toFixed(2);
    const pendingPercentage = ((Pending / total) * 100).toFixed(2);
    const latePercentage = ((Late / total) * 100).toFixed(2);
    

    return (
            <div className="chart">
                <div className="chart-wrapper">
                    <PieChart className='piechart' width={90} height={90}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={38}
                            outerRadius={45}
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
                        <p>{total}</p>
                        <span>{name}</span>
                    </div>
                </div>
                <div className="stats">
                    <div className="status">
                        <div className='indiv-status'>
                        <div className="color-box" style={{ backgroundColor: COLORS[0] }}></div>
                        <span>Completed</span>
                        </div>

                        <div className='indiv-status'>
                        <div className="color-box" style={{ backgroundColor: COLORS[1] }}></div>
                        <span>Pending</span>
                        </div>

                        <div className='indiv-status'>
                        <div className="color-box" style={{ backgroundColor: COLORS[2] }}></div>
                        <span>Late</span>
                        </div>
                    </div>


                    <div className="numbers">
                        <span>{Completed}</span>
                        <span>{Pending}</span>
                        <span>{Late}</span>
                    </div>

                    <div className="percentages">
                        <span>{completedPercentage}%</span>
                        <span>{pendingPercentage}%</span>
                        <span>{latePercentage}%</span>
                    </div>
                </div>
            </div>

    );
};

export default Multichart;
