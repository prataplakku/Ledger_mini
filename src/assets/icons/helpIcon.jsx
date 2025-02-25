import React from "react";

const HelpIcon = ({
    className,
    onClick,
}) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
            <path d="M6.05957 5.99973C6.21631 5.55417 6.52567 5.17847 6.93287 4.93915C7.34008 4.69983 7.81883 4.61235 8.28435 4.6922C8.74988 4.77205 9.17211 5.01408 9.47629 5.37541C9.78046 5.73675 9.94694 6.19408 9.94624 6.6664C9.94624 7.99973 7.94624 8.6664 7.94624 8.6664M7.99967 11.333H8.00634M14.6663 7.99967C14.6663 11.6816 11.6816 14.6663 7.99967 14.6663C4.31778 14.6663 1.33301 11.6816 1.33301 7.99967C1.33301 4.31778 4.31778 1.33301 7.99967 1.33301C11.6816 1.33301 14.6663 4.31778 14.6663 7.99967Z" stroke="#3F3F46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default HelpIcon;
