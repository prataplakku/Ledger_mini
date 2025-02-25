import React from "react";

const Attributes = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      onClick={() => onClick?.()}
    >
      <path
        d="M5 1H1.66667C1.29848 1 1 1.29848 1 1.66667V5C1 5.36819 1.29848 5.66667 1.66667 5.66667H5C5.36819 5.66667 5.66667 5.36819 5.66667 5V1.66667C5.66667 1.29848 5.36819 1 5 1Z"
        stroke="#3F3F46"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3333 1H9C8.63181 1 8.33333 1.29848 8.33333 1.66667V5C8.33333 5.36819 8.63181 5.66667 9 5.66667H12.3333C12.7015 5.66667 13 5.36819 13 5V1.66667C13 1.29848 12.7015 1 12.3333 1Z"
        stroke="#3F3F46"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3333 8.33333H9C8.63181 8.33333 8.33333 8.63181 8.33333 9V12.3333C8.33333 12.7015 8.63181 13 9 13H12.3333C12.7015 13 13 12.7015 13 12.3333V9C13 8.63181 12.7015 8.33333 12.3333 8.33333Z"
        stroke="#3F3F46"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 8.33333H1.66667C1.29848 8.33333 1 8.63181 1 9V12.3333C1 12.7015 1.29848 13 1.66667 13H5C5.36819 13 5.66667 12.7015 5.66667 12.3333V9C5.66667 8.63181 5.36819 8.33333 5 8.33333Z"
        stroke="#3F3F46"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Attributes;
