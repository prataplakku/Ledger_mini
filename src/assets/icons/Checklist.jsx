import React from "react";

const ChecklistIcon = ({
    className,
    onClick,
}) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
            <g clipPath="url(#clip0_788_14099)">
                <path d="M3 17L5 19L9 15M13 6H21M13 12H21M13 18H21M4 5H8C8.55228 5 9 5.44772 9 6V10C9 10.5523 8.55228 11 8 11H4C3.44772 11 3 10.5523 3 10V6C3 5.44772 3.44772 5 4 5Z" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_788_14099">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default ChecklistIcon;
