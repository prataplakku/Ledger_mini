import React from "react";
import "../styles/MultiSegmentProgress.css"; 

const MultiSegmentProgress = ({ segments, size = 100, circleNo, circleStr }) => {
    const strokeWidth = 23;
    const radius = (size - strokeWidth) / 2;
    const center = size / 2;

    let totalPercentage = segments.reduce((sum, segment) => sum + segment.percentage, 0);
    const remainingPercentage = Math.max(0, 100 - totalPercentage);

    const allSegments = [
        ...segments,
        ...(remainingPercentage > 0 ? [{ percentage: remainingPercentage, color: "#f3f4f6", label: "Remaining", value: '' }] : []),
    ];

    totalPercentage = 0;
    const gap = 6;

    const normalizedSegments = allSegments.map((segment) => {
        totalPercentage += segment.percentage;
        const startAngle = (totalPercentage - segment.percentage) * 3.6;
        const endAngle = totalPercentage * 3.6;

        return {
            ...segment,
            startAngle: startAngle + gap,
            endAngle: endAngle - gap,
        };
    });

    const createArc = (startAngle, endAngle) => {
        const start = polarToCartesian(center, center, radius, endAngle);
        const end = polarToCartesian(center, center, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        return [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");
    };

    const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
        const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians),
        };
    };

    return (
        <div className="progress-container">
            <div className="progress-circle-wrapper">
                <svg width={center} height={center} viewBox={`0 0 ${size} ${size}`}>
                    <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        className="progress-background"
                        strokeWidth={strokeWidth}
                    />
                    {normalizedSegments.map((segment, index) => (
                        <g key={index}>
                            <path
                                d={createArc(segment.startAngle, segment.endAngle)}
                                fill="none"
                                stroke={segment.color}
                                strokeWidth={strokeWidth}
                                className="progress-segment"
                            />
                        </g>
                    ))}
                </svg>
                <div className="progress-text">
                    <p className="progress-number">{circleNo}</p>
                    <p className="progress-label">{circleStr}</p>
                </div>
            </div>
            {allSegments[0].label && (
                <div className="progress-legend">
                    {allSegments.map((segment, index) => (
                        <div key={index} className="legend-item">
                            <div className="legend-color" style={{ backgroundColor: segment.color }}></div>
                            <div className="legend-text">
                                <p className="legend-label">{segment.label}</p>
                                <span className="legend-value">{segment.value}</span>
                                <span className="legend-percentage">{segment.percentage.toFixed(1)}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiSegmentProgress;
