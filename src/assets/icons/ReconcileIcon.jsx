import React from "react";

const ReconcileIcon = ({
    className,
    onClick,
}) => {
    return (
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
            <path d="M4.66634 13H11.333M7.99967 1V13M1.99967 3.66667H3.33301C4.66634 3.66667 6.66634 3 7.99967 2.33333C9.33301 3 11.333 3.66667 12.6663 3.66667H13.9997M10.6663 9.66667L12.6663 4.33333L14.6663 9.66667C14.0863 10.1 13.3863 10.3333 12.6663 10.3333C11.9463 10.3333 11.2463 10.1 10.6663 9.66667ZM1.33301 9.66667L3.33301 4.33333L5.33301 9.66667C4.75301 10.1 4.05301 10.3333 3.33301 10.3333C2.61301 10.3333 1.91301 10.1 1.33301 9.66667Z" stroke="#3F3F46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export default ReconcileIcon;
