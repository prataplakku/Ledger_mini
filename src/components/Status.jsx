import React from 'react';
import '../styles/Status.css';


const Status = ({ status }) => {
    let className = 'default-status';
    let PointClass = 'default-point';

    switch (status?.toLowerCase()) {
        case 'present':
            className = 'status-present';
            PointClass = 'point-present';
            break;
        case 'half day':
            className = 'status-half-day';
            break;
        case 'less hours':
            className = 'status-less-hours';
            break;
        case 'leave':
            className = 'status-leave';
            break;
        case 'pending':
            className = 'status-pending';
            PointClass = 'point-pending';
            break;
        case 'active':
            className = 'status-active';
            break;
        case 'completed':
            className = 'status-completed';
            PointClass = 'point-completed';
            break;
        case 'assigned':
            className = 'status-assigned';
            PointClass = 'point-assigned';
            break;
        default:
            className = 'status-default';
            PointClass = 'point-default';
            break;
    }

    return (
        <div>
            <p className={`status-container ${className}`}>
                <span className={`status-point ${PointClass}`}></span>
                {status || 'Unassigned'}
            </p>
        </div>
    );
};

export default Status;
