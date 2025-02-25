import React from "react";

const CloseToggle = ({
  className,
  onClick,
}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V26C32 29.3137 29.3137 32 26 32H6C2.68629 32 0 29.3137 0 26V6Z"
        fill="white"
      />
      <path
        d="M14 10V22M18.6667 18L16.6667 16L18.6667 14M11.3333 10H20.6667C21.403 10 22 10.597 22 11.3333V20.6667C22 21.403 21.403 22 20.6667 22H11.3333C10.597 22 10 21.403 10 20.6667V11.3333C10 10.597 10.597 10 11.3333 10Z"
        stroke="#3F3F46"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseToggle;
