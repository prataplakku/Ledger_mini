import React from "react";

const ResendInvitation = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
    >
      <path
        d="M1.5 9C1.5 7.01088 2.29018 5.10322 3.6967 3.6967C5.10322 2.29018 7.01088 1.5 9 1.5C11.0967 1.50789 13.1092 2.32602 14.6167 3.78333L16.5 5.66667M16.5 5.66667V1.5M16.5 5.66667H12.3333M16.5 9C16.5 10.9891 15.7098 12.8968 14.3033 14.3033C12.8968 15.7098 10.9891 16.5 9 16.5C6.90329 16.4921 4.89081 15.674 3.38333 14.2167L1.5 12.3333M1.5 12.3333H5.66667M1.5 12.3333V16.5"
        stroke="#27272A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ResendInvitation;
