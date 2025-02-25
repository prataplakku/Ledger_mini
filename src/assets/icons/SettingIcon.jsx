import React from "react";

const SettingIcon = ({
    className,
    onClick,
}) => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
            <path d="M12.3337 3.66699H6.33366M8.33366 10.3337H2.33366M8.33366 10.3337C8.33366 11.4382 9.22909 12.3337 10.3337 12.3337C11.4382 12.3337 12.3337 11.4382 12.3337 10.3337C12.3337 9.22909 11.4382 8.33366 10.3337 8.33366C9.22909 8.33366 8.33366 9.22909 8.33366 10.3337ZM5.66699 3.66699C5.66699 4.77156 4.77156 5.66699 3.66699 5.66699C2.56242 5.66699 1.66699 4.77156 1.66699 3.66699C1.66699 2.56242 2.56242 1.66699 3.66699 1.66699C4.77156 1.66699 5.66699 2.56242 5.66699 3.66699Z" stroke="#3F3F46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export default SettingIcon;
