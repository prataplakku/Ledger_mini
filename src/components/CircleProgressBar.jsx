import React from "react";
import "../styles/CircleProgressBar.css";

const CircleProgressBar = ({ percentage, color = "#4CAF50", size = 100, status }) => {
    const radius = size / 2;
    const strokeWidth = 7;
    const normalizedRadius = radius - strokeWidth * 0.5;
    const circumference = 2 * Math.PI * normalizedRadius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="circle-container" style={{ width: size, height: size }}>
            <svg className="progress-circle" width={size} height={size}>
            
                <circle
                    cx={radius}
                    cy={radius}
                    r={normalizedRadius}
                    className="circle-background"
                    strokeWidth={strokeWidth}
                />

                <circle
                    cx={radius}
                    cy={radius}
                    r={normalizedRadius}
                    className="circle-progress"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>
            <div className="circle-text">
                <p className="percentage-text">{percentage}%</p>
                <p className="status-text">{status}</p>
            </div>
        </div>
    );
};

export default CircleProgressBar;
