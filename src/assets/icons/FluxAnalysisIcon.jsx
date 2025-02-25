import React from "react";

const FluxAnalysisIcon = ({
    className,
    onClick,
}) => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
            <path d="M1 1V13H13M11.6667 5L8.33333 8.33333L5.66667 5.66667L3.66667 7.66667" stroke="#3F3F46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default FluxAnalysisIcon;
